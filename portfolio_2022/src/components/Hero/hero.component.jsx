import React from 'react';
import { saveAs } from 'file-saver';
import { useStaticQuery, graphql } from 'gatsby';

import { Button } from '../UI/Button/button.component';
import { Line } from '../UI/Icons/Line/line';
import { Mern } from '../UI/Icons/Mern/mern';
import { PaperPlane } from '../UI/Icons/Plane/paperPlane';

import * as Styled from './hero.styles';

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { category: { eq: "resume" } }) {
        id
        frontmatter {
          Slug
        }
      }
    }
  `);

  const downloadFile = () => {
    saveAs(`${data.markdownRemark.frontmatter.Slug}`);
  };

  return (
    <Styled.Intro>
      <Styled.Tag>
        I'm Pawan JS
        <Line />
        Available For Full-Time Job
      </Styled.Tag>
      <Styled.Heading>
        I'm
        <Styled.MarginFreelance> Unicorn </Styled.MarginFreelance>
        <Mern />
        <Styled.MarginRole>Developer</Styled.MarginRole>
        <br />
        Turning Your Paperball Into Paperplane
      </Styled.Heading>
      <Styled.Anim>
        <Styled.Shape />
        <Styled.PaperPlane>
          <PaperPlane />
        </Styled.PaperPlane>
      </Styled.Anim>
      <Styled.IntroContent>
        <Styled.Text>
          I help companies to build digital products and turn ideas into a
          functional and delightful experience. I’m focusing on building rich
          features – mainly building PWA and SPA applications.
        </Styled.Text>
        <Button text="Download Resume" onClick={downloadFile} />
      </Styled.IntroContent>
    </Styled.Intro>
  );
};
