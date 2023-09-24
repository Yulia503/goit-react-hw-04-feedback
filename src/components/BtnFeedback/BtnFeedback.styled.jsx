import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10 px;

  margin: 0px;
  padding: 20px;

  border: none ;
  border-radius: 10px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  background: pink;
  color: ${p => p.theme.colors.accent};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.accent};
    }
    :active {
      color: ${p => p.theme.colors.accent};

      }
    }
  }
`;
