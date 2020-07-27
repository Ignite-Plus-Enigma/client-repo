import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow} from 'enzyme';
import Adapter from 'jest-enzyme';
import App from './App';

// configure({adapter: new Adapter()});


test('renders book name', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('John Green');
  expect(linkElement).toBeInTheDocument();
});
