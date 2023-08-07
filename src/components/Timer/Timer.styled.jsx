import styled from 'styled-components';

export const TimerStyledWrp = styled.div`
  color: ${props => props.theme.colors.clearWhite};
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;
`;
export const TimerStyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px;
`;
export const TimerStyledValue = styled.span`
  font-size: 46px;
  font-weight: ${props => props.theme.fontWeights.black};
`;

export const TimerStyledLabel = styled.span`
  text-transform: uppercase;
`;

export const StyledTimerMessage = styled.h3`
  text-align: center;
  font-size: 54px;
  padding: 82px 30px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
