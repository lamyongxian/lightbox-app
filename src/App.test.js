import React from 'react';
import { render } from '@testing-library/react';
//import App from './App';
import { Lightbox } from './Lightbox';

test('renders lightbox component', () => {
  const { getByText } = render(<Lightbox header="My lightbox" />);
  const element = getByText(/My lightbox/i);
  expect(element).toBeInTheDocument();
});
