import styled from 'styled-components';

export const Intro = styled.div`
  width: 100%;
  padding: 0 4rem 0 17rem;
  box-sizing: border-box;
`;

export const Tag = styled.p`
  display: flex;
  align-items: center;
  animation: anim-text 1000ms cubic-bezier(0, 0.45, 0.15, 1);
  font-family: 'Averta', sans-serif;
  color: #eea1be;
  font-size: 1.6rem;

  svg {
    margin: 0 30px;
    fill: #574cf2;
  }
`;

export const Heading = styled.h1`
  margin-top: 4rem;
  width: 100%;
  z-index: 30;
  position: relative;
  animation: anim-text 1050ms cubic-bezier(0, 0.45, 0.15, 1);

  svg {
    transition: transform 200ms;

    :hover {
      cursor: pointer;
      transform: scale(1.1) rotate(10deg);
      z-index: 10;
    }
  }
`;

export const MarginFreelance = styled.span`
  margin-right: -50px;
`;

export const MarginRole = styled.span`
  margin-left: -60px;
  z-index: 20;
`;

export const Anim = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transform: translate(-13rem, 13rem);
  z-index: 10;
`;

export const Shape = styled.div`
  min-width: 32rem;
  min-height: 40rem;
  position: absolute;

  ::before {
    content: '';
    background-color: #18033c;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 20rem;
    border-bottom-right-radius: 20rem;
    height: 100%;
    width: 100%;
    position: absolute;
    animation: scale-background 2000ms cubic-bezier(0, 0.45, 0.15, 1);
  }
`;

export const PaperPlane = styled.div`
  position: absolute;
  z-index: 20;
  margin: -1rem 0 0 2rem;
  animation: paperplane-anim 2200ms cubic-bezier(0, 0.45, 0.15, 1);

  svg {
    margin-top: 0;
  }
`;

export const IntroContent = styled.div`
  margin-left: 42rem;
  width: 45%;
`;

export const Text = styled.p`
  animation: anim-text 1100ms cubic-bezier(0, 0.45, 0.15, 1);
  color: #8c85f3;
  margin: 4rem 0;
`;
