import React from 'react';
import { saveAs } from 'file-saver';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import { Logo } from '../UI/Logo/logo.jsx';

import * as Styled from './navbar.styles.js';

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
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
    <Styled.Nav>
      <Styled.Logo>
        <Link to="/">
          <Logo />
        </Link>
      </Styled.Logo>
      <Styled.ContentNav>
        <Styled.Menu>
          <button onClick={downloadFile}>Resume</button>
          <a href="https://github.com/PawanJS" target="_blank" rel="noreferrer">
            Github
          </a>
        </Styled.Menu>
      </Styled.ContentNav>
    </Styled.Nav>
  );
};
