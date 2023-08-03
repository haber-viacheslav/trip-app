import { useRef, useEffect, useCallback } from 'react';
import { TripsItem } from 'components/TripsItem/TripsItem';
import { TripsListWrp, ScrollButton } from './TripsList.styled';
import { AddButton } from '../buttons/AddButton';
import { TripsStyledAddItem } from 'components/TripsItem/TripsItem.styled';
export const TripsList = ({ visibleTrips, onToggle }) => {
  const tripsRef = useRef();

  const handleWheel = useCallback(e => {
    e.preventDefault();
    tripsRef.current.scrollTo({
      left: tripsRef.current.scrollLeft + e.deltaY * 10,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollLeft = useCallback(e => {
    if (tripsRef.current) {
      e.preventDefault();
      tripsRef.current.scrollTo({
        left: tripsRef.current.scrollLeft + e.deltaY * 10,
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

  return (
    <>
      {visibleTrips.length > 0 && (
        <div>
          <ScrollButton onClick={handleScrollLeft}>&lt;</ScrollButton>
          <TripsListWrp ref={tripsRef}>
            {visibleTrips.map(trip => (
              <TripsItem key={trip.id} tripData={trip} />
            ))}
            <TripsStyledAddItem>
              <AddButton onClick={onToggle} />
            </TripsStyledAddItem>
          </TripsListWrp>
          <ScrollButton onClick={handleScrollRight}>&gt;</ScrollButton>
        </div>
      )}
    </>
  );
};
