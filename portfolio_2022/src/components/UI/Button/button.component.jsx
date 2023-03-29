import React from 'react';
import styled from 'styled-components';

import { Email } from '../Icons/Email/email';

export const Button = ({ text, type, onClick }) => {
  return (
    <Contact type={type ? type : 'button'} onClick={onClick}>
      <Icon>
        <Email />
      </Icon>
      <Mail>{text}</Mail>
    </Contact>
  );
};

export const Contact = styled.button`
  border: 1px solid #574cf2;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  height: 8rem;
  background: transparent;
  width: 100%;

  :hover {
    :before {
      transform: skew(0, 0) rotate(0) translateY(0);
    }

    span {
      color: rgba(255, 255, 255, 0.4);
      transform: scale(0.95);

      :before {
        opacity: 1;
      }
    }
  }

  :before {
    content: '';
    background-color: #eea1be;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skew(0, 10deg) rotate(10deg) translateY(25rem);
    transition: transform 400ms;
    z-index: -10;
  }
`;

export const Icon = styled.div`
  height: 100%;
  padding: 0 4rem;
  margin-right: 4rem;
  display: flex;
  box-sizing: border-box;
  border-right: 1px solid rgba(243, 242, 244, 0.3);
  justify-content: center;
  align-items: center;
`;

export const Mail = styled.span`
  font-family: 'Averta', sans-serif;
  color: #f3f2f4;
  font-size: 1.4vw;
  transform: scale(1);
  opacity: 1;
  transition: transform 400ms cubic-bezier(0, 0.45, 0.15, 1),
    opacity 400ms cubic-bezier(0, 0.45, 0.15, 1);

  :before {
    content: attr(data-status);
    font-size: 16px;
    position: absolute;
    top: calc(50% - 8px);
    color: #18033c;
    font-family: 'Averta', sans-serif;
    justify-content: center;
    opacity: 0;
    transition: opacity 400ms;
  }
`;
