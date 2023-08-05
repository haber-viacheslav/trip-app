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
import { CloseButton } from './buttons/CloseButton';
import { Main } from 'components/Main/Main';
import { ForecastList } from './ForecastList/ForecastList';
import { StyledModalTitle, StyledModalHeader } from './App.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { localStorageService } from 'services/localStorageService';
import { HiddenTitle } from './HiddenTitle/HіddenTitle';
import { AsideForecastInfo } from './AsideInfo/AsideForecastInfo';
import { getWeatherByDates, getWeatherByDay } from 'api/weatherApi';
import { getTimeForTimer } from 'helpers/getTimeForTimer';
import cities from '../mockData/cities.json';
import { nanoid } from 'nanoid';
import { AsideForecastCard } from './AsideForecastCard/AsideForecastCard';
import { Timer } from './Timer/Timer';
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [forecastList, setForecastList] = useState(null);
  const [forecastPerDay, setForecastPerDay] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [visibleTrips, setVisibleTrips] = useState(() => {
    const parsedTrips = localStorageService.getItem('trips');
    if (!parsedTrips) {
      return [
        {
          name: 'Athens',
          imageUrl:
            'https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp',
          id: nanoid(),
          startTime: 1692374100000,
          endTime: 1692460500000,
        },
      ];
    }
    return [...parsedTrips];
  });
  if (selectedTrip) {
    getTimeForTimer(selectedTrip.startTime);
    console.log('selectedTrip.startTime', selectedTrip.startTime);
  }

  const handleAddTrip = newTip => {
    newTip.id = nanoid();
    setVisibleTrips(prevTrips =>
      [...prevTrips, newTip].sort(
        (prevTrip, nextTrip) => prevTrip.startTime - nextTrip.startTime
      )
    );
    setSelectedTrip(null);
    setForecastList(null);
  };
  const handleSelectTrip = selectedTip => {
    setSelectedTrip(selectedTip);
  };
  const handleToggleIsOpen = () => {
    setIsOpen(!isOpen);
    setSearch('');
    setSelectedTrip(null);
    setForecastList(null);
  };
  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
    setSelectedTrip(null);
    setForecastList(null);
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
  useEffect(() => {
    if (!selectedTrip) {
      return;
    }
    // setIsLoading(true);
    const getWeather = async selectedTrip => {
      try {
        const forecastData = await getWeatherByDates(selectedTrip);
        const forecastDay = await getWeatherByDay(selectedTrip);
        setForecastList(forecastData);
        setForecastPerDay(forecastDay);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    getWeather(selectedTrip);
  }, [selectedTrip]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <Section>
          <Container>
            <HiddenTitle text={'Trips'} />
            <Search value={search} onChange={handleSearchChange} />
            <TripsList
              selectTrip={handleSelectTrip}
              visibleTrips={getVisibleTrips()}
              onToggle={handleToggleIsOpen}
            />
          </Container>
        </Section>
        {selectedTrip && forecastList?.days.length > 0 && (
          <Section>
            <Container>
              <ForecastList forecastsData={forecastList} />
            </Container>
          </Section>
        )}
      </Main>
      <AsideForecastInfo>
        {selectedTrip && forecastPerDay ? (
          <>
            <AsideForecastCard forecast={forecastPerDay} />
            <Timer tripTime={selectedTrip.startTime} />
          </>
        ) : (
          <h3>Please select your trip</h3>
        )}
      </AsideForecastInfo>

      {isOpen && (
        <Modal onClick={handleToggleIsOpen}>
          <StyledModalHeader>
            <StyledModalTitle>Create trip</StyledModalTitle>
            <CloseButton onClick={handleToggleIsOpen}>
              <AiOutlineClose color="#9A9A9A" size={20} />
            </CloseButton>
          </StyledModalHeader>

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
