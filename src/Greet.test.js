// src/__tests__/Greet.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greet from './Greet';

test("renders greeting message", () => {
  render(<Greet/>);
  const heading = screen.getByText(/Hello, Pratik/i); // case-insensitive
  expect(heading).toBeInTheDocument();
});
