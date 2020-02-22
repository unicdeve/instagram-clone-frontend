import React from 'react';
import { ButtonWrapper } from './BorderLessButton.styles';

export default function BorderLessButton({ children, disabled }) {
  return <ButtonWrapper disabled={disabled}>{children}</ButtonWrapper>;
}
