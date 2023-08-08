import { useState, useEffect, useMemo } from 'react';
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
import { AsideForecastCard } from './AsideForecastCard/AsideForecastCard';
import { HiddenTitle } from './HiddenTitle/HіddenTitle';
import { UserButton } from 'components/buttons/UserButton';
import { AsideForecastInfo } from './AsideForecastInfo/AsideForecastInfo';
import { ForecastList } from './ForecastList/ForecastList';
import { Timer } from './Timer/Timer';
import {
  StyledModalTitle,
  StyledModalHeader,
  StyledAsideMessage,
} from './App.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { getWeatherByDates, getWeatherByDay } from 'api/weatherApi';
import cities from '../mockData/cities.json';
import { nanoid } from 'nanoid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { localStorageService } from 'services/localStorageService';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from 'firebaseService/initFirebase';
import {
  addNewUser,
  addNewTrip,
  getUserTrips,
} from 'firebaseService/firebaseApi';

const defaultTrip = {
  name: 'Athens',
  imageUrl:
    'https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp',
  id: nanoid(),
  startTime: 1692374100000,
  endTime: 1692460500000,
};
const notAuthTrips = localStorageService.getItem('notAuthorizedUserTrips');
const authTrips = localStorageService.getItem('authorizedUserTrips');
const user = localStorageService.getItem('user');

export const App = () => {
  const [userAcc] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [forecastList, setForecastList] = useState(null);
  const [forecastPerDay, setForecastPerDay] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [visibleTrips, setVisibleTrips] = useState(() => {
    if (authTrips && user) {
      return [...authTrips];
    } else if (!user && !authTrips && notAuthTrips) {
      return [...notAuthTrips];
    } else if (!user && !authTrips && !notAuthTrips) return [defaultTrip];
  });
  const provider = useMemo(() => new GoogleAuthProvider(), []);

  const handlesignInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = response.user;
      localStorageService.setItem('user', {
        uid,
        displayName,
        email,
        photoURL,
      });
      setTitle('Log out');
      await addNewUser(uid, displayName, email, photoURL);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSignOut = async () => {
    localStorageService.removeItem('user');
    localStorageService.removeItem('authorizedUserTrips');
    if (!notAuthTrips) {
      localStorageService.setItem('notAuthorizedUserTrips', [defaultTrip]);
      setTitle('Log in');
    }
    setVisibleTrips(notAuthTrips);
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleAddTrip = async newTip => {
    newTip.id = nanoid();

    if (!userAcc) {
      setVisibleTrips(prevTrips =>
        [...prevTrips, newTip].sort(
          (prevTrip, nextTrip) => prevTrip.startTime - nextTrip.startTime
        )
      );
      localStorageService.setItem('notAuthorizedUserTrips', [
        ...visibleTrips,
        newTip,
      ]);
      return;
    }

    try {
      await addNewTrip(userAcc.uid, newTip);
      setVisibleTrips(prevTrips =>
        [...prevTrips, newTip].sort(
          (prevTrip, nextTrip) => prevTrip.startTime - nextTrip.startTime
        )
      );
      localStorageService.setItem('authorizedUserTrips', [
        ...visibleTrips,
        newTip,
      ]);
    } catch (e) {
      console.log(e.message);
    }

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
    if (search) {
      const normalizedSearch = search.toLowerCase();
      return visibleTrips.filter(visibleTrip =>
        visibleTrip.name.toLowerCase().includes(normalizedSearch)
      );
    }
    return visibleTrips;
  };

  useEffect(() => {
    const getAllUserTrips = async () => {
      if (!userAcc) {
        setTitle('Log in');
        return;
      }
      try {
        const userTrips = await getUserTrips(userAcc.uid);
        setVisibleTrips([...userTrips, defaultTrip]);
        localStorageService.setItem('authorizedUserTrips', [
          ...userTrips,
          defaultTrip,
        ]);
        setTitle('Log out');
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllUserTrips();
  }, [userAcc]);
  useEffect(() => {
    if (!selectedTrip) {
      return;
    }
    const getWeather = async selectedTrip => {
      try {
        const forecastData = await getWeatherByDates(selectedTrip);
        const forecastDay = await getWeatherByDay(selectedTrip);
        setForecastList(forecastData);
        setForecastPerDay(forecastDay);
      } catch (e) {
        console.log(e.message);
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
        <UserButton
          title={title}
          variant={user?.photoURL || ''}
          signOut={handleSignOut}
          signIn={handlesignInWithGoogle}
        />

        {selectedTrip && forecastPerDay ? (
          <>
            <AsideForecastCard forecast={forecastPerDay} />
            <Timer tripTime={selectedTrip.startTime} />
          </>
        ) : (
          <StyledAsideMessage>
            Please select your trip to check the weather forecast.
          </StyledAsideMessage>
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
