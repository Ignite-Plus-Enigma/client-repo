import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';

configure({adapter: new Adapter()});


test('renders without crashing', () => {
//   // const { getByText } = render(<App />);
  const div = document.createElement('div');
  ReactDOM.render(<App/>,div);

//  expect(linkElement).toBeInTheDocument();
});
