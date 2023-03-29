import React from 'react';

import { Form } from '../Form/form.component';

import * as Styled from './information.styles';

export const Information = () => {
  return (
    <Styled.Information>
      <Styled.OutlineTitle className="outline-title">
        Services &amp;&nbsp;Contact
      </Styled.OutlineTitle>
      <Styled.InformationContent>
        <Styled.About>
          <Styled.Title>
            I’m building digital experience and products
          </Styled.Title>
          <Styled.Text>
            Focused on digital products over these years I helped companies and
            growing startup build apps and websites of all sorts.
          </Styled.Text>
          <Styled.Line />
        </Styled.About>
        <Styled.Contact>
          <Styled.Tag>Contact</Styled.Tag>
          <Styled.ContactTitle>
            Interested ? Lets Get In Touch&nbsp;!
          </Styled.ContactTitle>
          <Styled.ContactText>
            you can stay in touch with me on
            <a
              href="https://github.com/PawanJS"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Github.&nbsp;
            </a>
            I post all of my work on
            <a
              href="https://github.com/PawanJS"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Github.&nbsp;
            </a>
          </Styled.ContactText>
          <Form />
        </Styled.Contact>
      </Styled.InformationContent>
    </Styled.Information>
  );
};
