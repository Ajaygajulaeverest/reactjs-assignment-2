import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe("Users List Application", () => {
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Add");
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Invite Users");
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Users");
  expect(linkElement).toBeInTheDocument();
});

})



