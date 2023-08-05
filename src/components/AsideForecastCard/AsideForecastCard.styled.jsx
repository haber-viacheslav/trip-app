import styled from 'styled-components';

export const ForecastStyledWrp = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const ForecastStyledTitle = styled.h3`
  font-size: 46px;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;
export const ForecastStyledContentWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ForecastStyledImage = styled.img`
  width: 100%;
`;
export const ForecastStyledTemp = styled.p`
  font-size: 100px;
  font-weight: ${props => props.theme.fontWeights.medium};
`;
export const ForecastStyledLocation = styled.p`
  font-size: 46px;
  font-weight: ${props => props.theme.fontWeights.regular};
`;
export const ForecastStyledSup = styled.sup`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 40px;
`;
