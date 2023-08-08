import styled from 'styled-components';

export const ForecastStyledItem = styled.li`
  width: 100px;
  flex: 0 0 100px;
  padding: 10px;
  background-color: ${props => props.theme.colors.clearWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ForecastDay = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.fontWeights.medium};
`;
export const ForecastWrapImg = styled.div`
  overflow: hidden;
`;
export const ForecastImg = styled.img`
  display: block;
  object-fit: cover;
`;
export const ForecastTemperature = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.darkBlue};
`;
