import styled from 'styled-components';
import { weatherIcon } from 'images/images';

export const AsideStyledForecastInfo = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 35%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  color: ${props => props.theme.colors.clearWhite};
  background-color: ${props => props.theme.colors.asideBgNightColor};
  z-index: 20;
  background-image: url(${weatherIcon.bgCloud}), url(${weatherIcon.bgCloud}),
    url(${weatherIcon.bgCloud}), url(${weatherIcon.bgCloud});
  background-size: 450px, 230px, 200px, 440px;
  background-position: 350px 1000px, 600px 250px, 30px 20px, -200px 900px;
  background-repeat: no-repeat;
`;

export const AsideStyledForecastWrp = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
