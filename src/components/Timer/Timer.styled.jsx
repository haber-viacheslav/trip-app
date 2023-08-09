import styled from 'styled-components';

export const TimerStyledWrp = styled.div`
  color: ${props => props.theme.colors.clearWhite};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  @media screen and (${props => props.theme.media.laptop}) {
    padding: 30px;
  }
  @media screen and (${props => props.theme.media.laptopL}) {
    padding: 40px;
  }
`;
export const TimerStyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${props => props.theme.media.laptopL}) {
    gap: 20px;
    padding: 20px;
  }
`;
export const TimerStyledValue = styled.span`
  font-size: 26px;
  font-weight: ${props => props.theme.fontWeights.black};
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 40px;
  }
`;

export const TimerStyledLabel = styled.span`
  text-transform: uppercase;
`;

export const StyledTimerMessage = styled.h3`
  text-align: center;
  font-size: 20px;
  padding: 40px 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  @media screen and (${props => props.theme.media.laptopL}) {
    font-size: 26px;
    padding: 82px 30px;
  }
`;
