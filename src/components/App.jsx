import { useState } from 'react';
import { theme } from '../theme/theme';
import { ThemeProvider } from 'styled-components';
import { AddForm } from './AddForm/AddForm';
import { Modal } from './Modal/Modal';
import { TripsList } from './TripsList/TripsList';
import cities from '../mockData/cities.json';
import { nanoid } from 'nanoid';
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleTrips, setVisibleTrips] = useState([
    {
      name: 'Athens',
      imageUrl:
        'https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp',
      id: nanoid(),
      startTime: 166854545455,
      endTime: 168544585545,
    },
  ]);
  console.log('actual trips list', visibleTrips);

  const handleAddTrip = newTip => {
    newTip.id = nanoid();
    setVisibleTrips(prevTrips => [...prevTrips, newTip]);
  };
  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <a href="/">Weather Forecast</a>
        <TripsList visibleTrips={visibleTrips} onToggle={handleToggleIsOpen} />
      </>
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
