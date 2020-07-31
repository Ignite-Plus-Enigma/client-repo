import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});


test('renders Navbar', () => {
//   // const { getByText } = render(<App />);
  const wrapper = shallow(<Navbar/>);
  const NavBarListItems = wrapper.find('li');
  expect(NavBarListItems.length).toBe(7);

//  expect(linkElement).toBeInTheDocument();
});
