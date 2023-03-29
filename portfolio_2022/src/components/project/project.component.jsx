import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as Styled from './project.styles';

export const Project = ({ data }) => {
  const {
    ClassName,
    Badge,
    Number,
    CTAText,
    Paragraph,
    Slug,
    Client,
    Title,
    ProjectImage,
  } = data.node.frontmatter;

  return (
    <Styled.Project className={ClassName}>
      <Styled.ProjectLink href={Slug} rel="noreferrer" target="_blank">
        {Badge ? <Styled.BadgeNew>Badge</Styled.BadgeNew> : null}
        <Styled.ProjectImg>
          <GatsbyImage
            image={ProjectImage.childImageSharp.gatsbyImageData}
            alt={Client}
          />
        </Styled.ProjectImg>
        <Styled.ProjectDesc>
          <Styled.ProjectNumber>0{Number}</Styled.ProjectNumber>
          <Styled.ProjectArrow />
          <Styled.ProjectHover>
            <Styled.ProjectClient>{Client}</Styled.ProjectClient>
            <Styled.ProjectView>{CTAText}</Styled.ProjectView>
          </Styled.ProjectHover>
          <h3>{Title}</h3>
          <Styled.Text>{Paragraph}</Styled.Text>
        </Styled.ProjectDesc>
      </Styled.ProjectLink>
    </Styled.Project>
  );
};
