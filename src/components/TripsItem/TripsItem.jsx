import {
  TripsStyledItem,
  TripsWrapImg,
  TripsImg,
  TripsContentWrap,
  TripsTitle,
  TripsDate,
} from './TripsItem.styled';
import { formatRequestDate } from 'helpers/formatRequestDate';
export const TripsItem = ({
  tripData: { id, name, imageUrl, startTime, endTime },
}) => {
  return (
    <TripsStyledItem>
      <TripsWrapImg>
        <TripsImg src={imageUrl} alt={name} />
      </TripsWrapImg>
      <TripsContentWrap>
        <TripsTitle>{name}</TripsTitle>

        <TripsDate>{`${formatRequestDate(
          startTime,
          'toPoints'
        )} - ${formatRequestDate(endTime, 'toPoints')}`}</TripsDate>
      </TripsContentWrap>
    </TripsStyledItem>
  );
};
