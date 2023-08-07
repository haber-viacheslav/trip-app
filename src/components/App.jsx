import { useState, useEffect, useMemo, useContext } from 'react';
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
import { localStorageService } from 'services/localStorageService';
import { getWeatherByDates, getWeatherByDay } from 'api/weatherApi';
import cities from '../mockData/cities.json';
import { nanoid } from 'nanoid';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import { ref, set } from 'firebase/database';
//import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  // const [user, setUser] = useState(null);
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
  const provider = useMemo(() => new GoogleAuthProvider(), []);

  const { auth, database } = useContext(Context);
  const [userAcc] = useAuthState(auth);

  console.log('userAcc', userAcc);

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      // const { displayName, email, photoURL, accessToken, uid } = response.user;
      // setUser({ displayName, email, photoURL, accessToken, uid });
    } catch (e) {
      console.log(e.errorCode, e.errorMessage);
    }
  };

  const handleSignOut = async () => {
    try {
      signOut(auth);
      // setUser(null);
    } catch (e) {
      console.log(e.errorCode, e.errorMessage);
    }
  };

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  const handleAddTrip = newTip => {
    newTip.id = nanoid();
    setVisibleTrips(prevTrips =>
      [...prevTrips, newTip].sort(
        (prevTrip, nextTrip) => prevTrip.startTime - nextTrip.startTime
      )
    );
    const { displayName, email, photoURL, accessToken, uid } = userAcc;
    writeUserData(uid, displayName, email, photoURL);
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
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userData => {
  //     if (userData) {
  //       const { displayName, email, photoURL, accessToken, uid } = userData;
  //       console.log('userData', userData);

  //       setUser({ displayName, email, photoURL, accessToken, uid });
  //     }
  //     // setUser(null);
  //   });
  //   return unsubscribe;
  // }, [provider, user]);
  useEffect(() => {
    localStorageService.setItem('trips', visibleTrips);
  }, [visibleTrips]);
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
      } catch (error) {
        console.log(error);
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
        {!userAcc ? (
          <UserButton onClick={signInWithGoogle} />
        ) : (
          <UserButton onClick={handleSignOut} />
        )}

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
