import styled from 'styled-components';

export const TripsListWrp = styled.ul`
  position: relative;
  display: flex;
  gap: 40px;
  align-items: center;
  min-width: 400px;
  max-width: 900px;
  padding: 30px;
  white-space: nowrap;
  overflow-x: hidden;
`;

export const ScrollButton = styled.button`
  position: absolute;
  z-index: 10;
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
