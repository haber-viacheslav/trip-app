import styled from 'styled-components';

export const StyledModalHeader = styled.div`
  padding: 12px 20px;
`;
export const StyledModalTitle = styled.h2`
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const StyledAsideMessage = styled.h2`
  text-align: center;
  font-size: 48px;
  padding: 40px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
