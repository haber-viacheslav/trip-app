import styled from 'styled-components';

export const AsideStyledForecastInfo = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  color: ${props => props.theme.colors.clearWhite};
  background-color: ${props => props.theme.colors.asideBgNightColor};
  z-index: 20;
`;

export const AsideStyledForecastWrp = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
