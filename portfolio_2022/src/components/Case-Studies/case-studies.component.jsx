import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Project } from '../project/project.component';

import * as Styled from './case-studies.styles';

export const CaseStudies = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      markdownRemark(frontmatter: { category: { eq: "case studies" } }) {
        id
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { fields: frontmatter___Number }
      ) {
        edges {
          node {
            id
            frontmatter {
              CTAText
              Title
              Number
              Paragraph
              Client
              Slug
              ClassName
              ProjectImage {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const ProjectData = data.allMarkdownRemark.edges;

  return (
    <Styled.CaseStudies>
      <span className="outline-title">Case Studies & Projects</span>
      {ProjectData.map((project) => (
        <Project key={project.node.id} data={project} />
      ))}
    </Styled.CaseStudies>
  );
};
