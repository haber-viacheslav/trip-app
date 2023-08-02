import { TripsItem } from 'components/TripsItem/TripsItem';
import { TripsListWrp } from './TripsList.styled';
import { AddButton } from '../buttons/AddButton';
import { TripsStyledAddItem } from 'components/TripsItem/TripsItem.styled';
export const TripsList = ({ visibleTrips, onToggle }) => {
  return (
    <>
      {' '}
      {visibleTrips.length > 0 && (
        <TripsListWrp>
          {visibleTrips.map(trip => (
            <TripsItem key={trip.id} tripData={trip} />
          ))}
          <TripsStyledAddItem>
            <AddButton onClick={onToggle} />
          </TripsStyledAddItem>
        </TripsListWrp>
      )}
    </>
  );
};
