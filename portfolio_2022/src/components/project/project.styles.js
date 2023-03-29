import styled from 'styled-components';

export const Project = styled.section`
  position: relative;
  transition: background-color 400ms;
  height: 100%;

  :hover {
    background-color: rgba(87, 76, 242, 0.4);
  }

  :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    outline: 1px solid rgba(87, 76, 242, 0.4);
    outline-offset: -1px;
    background: linear-gradient(
        to bottom right,
        transparent calc(50% - 1px),
        rgba(87, 76, 242, 0.4) calc(50% - 1px),
        rgba(87, 76, 242, 0.4) 50%,
        transparent 50%
      ),
      linear-gradient(
        to bottom left,
        transparent calc(50% - 1px),
        rgba(87, 76, 242, 0.4) calc(50% - 1px),
        rgba(87, 76, 242, 0.4) 50%,
        transparent 50%
      );
  }

  :after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -5;
  }

  &.project-0 {
    align-self: flex-end;
    width: 60%;
    margin: 0px 0 18rem 42rem;
    animation: anim-text 1250ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  &.project-1 {
    width: 60%;
    animation: anim-text 1200ms cubic-bezier(0, 0.45, 0.15, 1);
    margin-bottom: 13rem;
  }

  &.project-2 {
    align-self: flex-end;
    width: 35%;
    animation: anim-text 1250ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  &.project-3 {
    width: 45%;
    margin: 8rem 0 18rem 0;
    animation: anim-text 1300ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  &.project-4 {
    margin-top: 26rem;
    width: 45%;
    animation: anim-text 1350ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  &.project-5 {
    margin: 2rem 0 26rem 0;
    width: 35%;
    animation: anim-text 1400ms cubic-bezier(0, 0.45, 0.15, 1);
  }

  &.project-6 {
    margin: 16rem 0 0 0;
    width: 55%;
    animation: anim-text 1400ms cubic-bezier(0, 0.45, 0.15, 1);
    margin-bottom: 6rem;
  }
`;

export const ProjectLink = styled.a``;

export const BadgeNew = styled.div`
  position: absolute;
  height: 3.6rem;
  width: 14rem;
  right: -2rem;
  top: -1.6rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18033c;
  font-family: 'Averta', sans-serif;
  display: flex;
  align-items: center;
  border-radius: 4rem;
  z-index: 10;
`;

export const ProjectImg = styled.div`
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    display: block;
  }
`;

export const ProjectDesc = styled.div`
  padding: 4rem 4rem 8rem 8rem;
  box-sizing: border-box;
`;

export const ProjectNumber = styled.span`
  color: #8c85f3;
  transition: color 200ms;

  ${ProjectLink}:hover & {
    color: #f3f2f4;
  }
`;

export const ProjectArrow = styled.span`
  position: relative;
  display: inline-block;
  background-color: #18033c;
  height: 1px;
  width: 4rem;
  top: -5px;
  margin: 0 2rem;
  transition: width 400ms;

  ${ProjectLink}:hover & {
    width: 50px;
  }

  :before {
    top: 0;
    transform: rotate(0);
    opacity: 0;
    content: '';
    position: absolute;
    background: #18033c;
    height: 1px;
    width: 1rem;
    right: -2px;
    margin-right: 0;
    backface-visibility: hidden;
    transition: transform 400ms, top 400ms, opacity 200ms;

    ${ProjectLink}:hover & {
      top: -3px;
      transform: rotate(30deg);
      margin-left: 5px;
      opacity: 1;
    }
  }

  :after {
    top: 0;
    transform: rotate(0);
    opacity: 0;
    content: '';
    position: absolute;
    background: #18033c;
    height: 1px;
    width: 1rem;
    right: -2px;
    margin-right: 0;
    backface-visibility: hidden;
    transition: transform 400ms, top 400ms, opacity 200ms;

    ${ProjectLink}:hover & {
      top: 3px;
      transform: rotate(-30deg);
      margin-left: 5px;
      opacity: 1;
    }
  }
`;

export const ProjectHover = styled.span``;

export const ProjectClient = styled.span`
  position: absolute;
  transform: translateX(0);
  opacity: 1;
  transition: transform 400ms, opacity 200ms, color 400ms;
  color: #8c85f3;

  ${ProjectLink}:hover & {
    transform: translateX(30px);
    opacity: 0;
    color: #f3f2f4;
  }
`;

export const ProjectView = styled.span`
  position: absolute;
  transform: translateX(-10px);
  opacity: 0;
  transition: transform 400ms, opacity 200ms, color 400ms;
  color: #8c85f3;

  ${ProjectLink}:hover & {
    transform: translateX(10px);
    opacity: 1;
    color: #f3f2f4;
  }
`;

export const Text = styled.p`
  color: #8c85f3;
`;
