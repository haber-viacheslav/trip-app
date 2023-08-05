import { useRef, useEffect, useCallback, useState } from 'react';
import { TripsItem } from 'components/TripsItem/TripsItem';
import {
  StyledTripsListWrp,
  StyledTripsList,
  StyledPrevScrollButton,
  StyledNextScrollButton,
} from './TripsList.styled';
import { BiSolidChevronLeft, BiSolidChevronRight } from 'react-icons/bi';
import { AddButton } from '../buttons/AddButton';
import { TripsStyledAddItem } from 'components/TripsItem/TripsItem.styled';
export const TripsList = ({ visibleTrips, onToggle, selectTrip }) => {
  const tripsRef = useRef();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const tripsList = tripsRef.current;
    if (tripsList) {
      const atStart = tripsList.scrollLeft === 0;
      const atEnd =
        Math.round(tripsList.scrollLeft + tripsList.clientWidth) >=
          tripsList.scrollWidth - 20 &&
        Math.round(tripsList.scrollLeft + tripsList.clientWidth) <=
          tripsList.scrollWidth;
      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    }
  };
  const handleWheel = useCallback(e => {
    e.preventDefault();
    tripsRef.current.scrollTo({
      left: tripsRef.current.scrollLeft + e.deltaY * 4,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollLeft = useCallback(e => {
    if (tripsRef.current) {
      e.preventDefault();
      tripsRef.current.scrollTo({
        left: tripsRef.current.scrollLeft + e.deltaY * 4,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleScrollRight = useCallback(e => {
    if (tripsRef.current) {
      e.preventDefault();
      const containerWidth = tripsRef.current.clientWidth;
      tripsRef.current.scrollTo({
        left: tripsRef.current.scrollLeft + containerWidth,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const tripsList = tripsRef.current;
    if (tripsList) {
      tripsList.addEventListener('wheel', handleWheel);
      return () => tripsList.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  useEffect(() => {
    const tripsList = tripsRef.current;
    if (tripsList) {
      tripsList.addEventListener('scroll', handleScroll);
      return () => tripsList.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <StyledTripsListWrp>
      {visibleTrips.length > 3 && !isAtStart && (
        <StyledPrevScrollButton onClick={handleScrollLeft}>
          <BiSolidChevronLeft size="30" color="#100E3A" />
        </StyledPrevScrollButton>
      )}
      <StyledTripsList ref={tripsRef}>
        {visibleTrips.length > 0 &&
          visibleTrips.map(trip => (
            <TripsItem
              key={trip.id}
              tripData={trip}
              selectTrip={() => selectTrip(trip)}
            />
          ))}
        <TripsStyledAddItem>
          <AddButton onClick={onToggle} />
        </TripsStyledAddItem>
      </StyledTripsList>

      {visibleTrips.length > 3 && !isAtEnd && (
        <StyledNextScrollButton onClick={handleScrollRight}>
          <BiSolidChevronRight size="30" color="#100E3A" />
        </StyledNextScrollButton>
      )}
    </StyledTripsListWrp>
  );
};
