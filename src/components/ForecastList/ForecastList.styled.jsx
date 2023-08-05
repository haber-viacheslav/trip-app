import styled from 'styled-components';

export const ForecastStyledListWrp = styled.div`
  width: 840px;
`;
export const ForecastStyledTitle = styled.h2`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.darkBlue};
  margin-bottom: 40px;
`;
export const ForecastStyledList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  white-space: nowrap;
  overflow-x: hidden;
`;
