import styled from 'styled-components';

export const StyledSection = styled.section`
  height: calc(100vh - 88px);
  padding-top: ${props => props.padTopSm || '40px'};
  padding-bottom: ${props => props.padBottomSM || '100px'};

  @media screen and (${props => props.theme.media.mdToLg}) {
    height: calc(100vh - 96px);
    padding-top: ${props => props.padTopMd || '80px'};
    padding-bottom: ${props => props.padBottomMd || '192px'};
  }

  @media screen and (${props => props.theme.media.lg}) {
    height: calc(100vh - 88px);
    padding-top: ${props => props.padTopLg || '80px'};
    padding-bottom: ${props => props.padBottomLg || '103px'};
  }
`;
