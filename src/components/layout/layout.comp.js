import React from 'react';
import Header from '../header/header.comp';
import { Container } from './layout.styles';

export default function CustomLayout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
