import React from 'react';
import { saveAs } from 'file-saver';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import { Logo } from '../UI/Logo/logo';

import * as Styled from './footer.styles';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
    <>
      <Styled.Nav>
        <Styled.Logo>
          <Link to="/">
            <Logo />
          </Link>
        </Styled.Logo>
        <Styled.ContentNav>
          <Styled.Menu>
            <button onClick={downloadFile}>Resume</button>
            <a
              href="https://github.com/PawanJS"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Styled.Menu>
        </Styled.ContentNav>
      </Styled.Nav>
      <Styled.Copyright>
        Made with &#10084; by
        <a href="https://pawanjs.com" target="_blank" rel="noreferrer">
          {' '}
          Pawan JS
        </a>
      </Styled.Copyright>
    </>
  );
};
