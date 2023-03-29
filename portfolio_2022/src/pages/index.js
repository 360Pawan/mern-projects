import * as React from 'react';

import { Layout } from '../components/Layout/layout.component';
import { Hero } from '../components/Hero/hero.component';
import { CaseStudies } from '../components/Case-Studies/case-studies.component';
import { Information } from '../components/Information/information.component';

import '../assets/global/style.scss';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <CaseStudies />
      <Information />
    </Layout>
  );
};

export default IndexPage;
