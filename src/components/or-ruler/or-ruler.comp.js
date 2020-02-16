import React from 'react';
import { OrContainer, HalfRuler, OrDiv } from './or-ruler.styles';

export default function OrRuler() {
  return (
    <OrContainer>
      <HalfRuler />
      <OrDiv>or</OrDiv>
      <HalfRuler />
    </OrContainer>
  );
}
