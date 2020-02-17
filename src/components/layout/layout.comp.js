import React from 'react';
import Header from '../header/header.comp';

export default function CustomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
