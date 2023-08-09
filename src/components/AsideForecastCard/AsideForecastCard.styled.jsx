import styled from 'styled-components';

export const ForecastStyledWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;

  @media screen and (${props => props.theme.media.laptopL}) {
    gap: 20px;
    padding: 20px;
  }
`;
export const ForecastStyledTitle = styled.h3`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 46px;
  }
`;
export const ForecastStyledContentWrp = styled.div`
  display: flex;
  align-items: center;

  @media screen and (${props => props.theme.media.laptopL}) {
    gap: 20px;
  }
`;
export const ForecastStyledImage = styled.img`
  width: 100%;
`;
export const ForecastStyledTemp = styled.p`
  font-size: 80px;
  font-weight: ${props => props.theme.fontWeights.medium};
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 100px;
  }
`;
export const ForecastStyledLocation = styled.p`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.regular};
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 46px;
  }
`;
export const ForecastStyledSup = styled.sup`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 30px;
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 40px;
  }
`;
