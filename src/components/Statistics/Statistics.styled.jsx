import styled from 'styled-components';

export const StaticList = styled.ul`
  padding: 12px;
  max-width: 400px;
  margin: 0 auto;

  border-radius: 10px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: pink;
`;

export const DescrStatistics = styled.p`
  display: flex;
  gap: 20px;

  margin: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  transition: all 0.2s ease-in-out;

  color: black;
  text-shadow: ${props => props.theme.shadows.textShadow};
  cursor: pointer;
  }
`;
