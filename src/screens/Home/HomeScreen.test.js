import React from 'react';
import { render } from '@testing-library/react';
import HomeScreen from './HomeScreen';

test('renders learn react link', () => {
  const { getByText } = render(<HomeScreen />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
