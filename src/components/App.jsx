import { useState, useEffect } from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import { AddForm } from './AddForm/AddForm';
import { Modal } from './Modal/Modal';
import { TripsList } from './TripsList/TripsList';
import { Section } from './Section/Section';
import { Container } from './Container/Container';
import { Header } from './Header/Header';
import { Search } from './Search/Search';
import { localStorageService } from 'services/localStorageService';
import cities from '../mockData/cities.json';
import { nanoid } from 'nanoid';
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [visibleTrips, setVisibleTrips] = useState(() => {
    const parsedTrips = localStorageService.getItem('trips');
    if (!parsedTrips) {
      return [
        {
          name: 'Athens',
          imageUrl:
            'https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp',
          id: nanoid(),
          startTime: 1668545454550,
          endTime: 1685445855450,
        },
      ];
    }
    return [...parsedTrips].sort(
      (prevTrip, nextTrip) => prevTrip.startTime - nextTrip.startTime
    );
  });
  // const [visibleTrips, setVisibleTrips] = useState([
  //   {
  //     name: 'Athens',
  //     imageUrl:
  //       'https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp',
  //     id: nanoid(),
  //     startTime: 166854545455,
  //     endTime: 168544585545,
  //   },
  // ]);
  console.log('actual trips list', visibleTrips);
  console.log('search', search);

  const handleAddTrip = newTip => {
    newTip.id = nanoid();
    setVisibleTrips(prevTrips => [...prevTrips, newTip]);
  };
  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
  };
  const getVisibleTrips = () => {
    const normalizedSearch = search.toLowerCase();
    return visibleTrips.filter(visibleTrip =>
      visibleTrip.name.toLowerCase().includes(normalizedSearch)
    );
  };
  useEffect(() => {
    localStorageService.setItem('trips', visibleTrips);
  }, [visibleTrips]);

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Section>
        <Container>
          <Search value={search} onChange={handleSearchChange} />
          <TripsList
            visibleTrips={getVisibleTrips()}
            onToggle={handleToggleIsOpen}
          />
        </Container>
      </Section>
      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <AddForm
            cities={cities}
            addTrip={handleAddTrip}
            onClick={handleToggleIsOpen}
          />
        </Modal>
      )}
    </ThemeProvider>
  );
};
