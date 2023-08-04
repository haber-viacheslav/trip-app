import styled from 'styled-components';
export const TripsStyledItem = styled.li`
  width: 200px;
  flex: 0 0 200px;
  background-color: ${props => props.theme.colors.clearWhite};
`;

export const TripsContentWrap = styled.div`
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.lightGrey};
`;
export const TripsWrapBtn = styled.button`
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.mainShadow};
  }
  &:focus > ${TripsContentWrap} {
    border-color: ${props => props.theme.colors.blue};
  }
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
export const TripsStyledAddItem = styled.li`
  align-self: flex-start;
  flex: 0 0 200px;
`;
