import React from 'react';

import { Footer } from '../Footer/footer.component';
import { Navbar } from '../Navbar/navbar.component';

import * as Styled from './layout.styles';

export const Layout = (props) => {
  return (
    <Styled.Content>
      <Navbar />
      {props.children}
      <Footer />
    </Styled.Content>
  );
};
