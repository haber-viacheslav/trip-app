import styled from 'styled-components';
export const TripsStyledItem = styled.li`
  width: 200px;
  background-color: ${props => props.theme.colors.clearWhite};
  box-shadow: ${props => props.theme.shadows.mainShadow};
`;

export const TripsWrapImg = styled.div`
  overflow: hidden;
`;

export const TripsImg = styled.img`
  display: block;
  object-fit: cover;
  height: 160px;
  width: 100%;
`;

export const TripsContentWrap = styled.div`
  padding: 16px;
`;

export const TripsTitle = styled.h3`
  margin-left: 0;
  margin-bottom: 10px;
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.black};
  font-size: 12px;
`;

export const TripsDate = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.lightGrey};
  font-size: 10px;
`;
export const TripsStyledAddItem = styled(TripsStyledItem)`
  align-self: flex-start;
`;
