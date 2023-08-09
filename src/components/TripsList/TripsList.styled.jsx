import styled from 'styled-components';

export const StyledTripsListWrp = styled.div`
  position: relative;
  width: 480px;

  @media screen and (${props => props.theme.media.laptop}) {
    width: 480px;
  }
  @media screen and (${props => props.theme.media.laptopM}) {
    width: 680px;
  }

  @media screen and (${props => props.theme.media.laptopXl}) {
    width: 920px;
  }
`;
export const StyledTripsList = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  white-space: nowrap;
  overflow-x: hidden;
  @media screen and (${props => props.theme.media.laptopL}) {
  }
`;

export const StyledPrevScrollButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  z-index: 10;
  margin: 5px;
  padding: 5px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.lightBlue};
  color: 'blue';
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms background-color ease-in-out, 250ms box-shadow ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.lightArrowBtn};
    box-shadow: ${props => props.theme.shadows.scrollBtnShadow};
  }
  &svg {
    color: ${props => props.theme.colors.blue};
  }
`;
export const StyledNextScrollButton = styled(StyledPrevScrollButton)`
  z-index: 11;
  right: 0;
`;
