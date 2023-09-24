import styled from 'styled-components';

export const MainHeader = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.l}; ;
`;
