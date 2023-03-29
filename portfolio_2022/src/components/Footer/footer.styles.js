import styled from 'styled-components';

export const Nav = styled.div`
  padding: 6rem 4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  z-index: 0;
  animation: opacity-menu 1200ms;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 4rem;
  height: 4rem;
`;

export const ContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  a,
  button {
    transition: color 400ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  button {
    font-family: 'Averta', sans-serif;
    color: #f3f2f4;
    font-size: 1.6rem;
    text-decoration: none;
    text-rendering: geometricPrecision;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  a:hover,
  button:hover {
    color: #eea1be;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;
