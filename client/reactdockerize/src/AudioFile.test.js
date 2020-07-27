import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioFile from './Components/AudioFile';
import App from './App';

configure({adapter: new Adapter()});

describe('AudioFile component heading', () => {
    test('shows book name', () => {
        const wrapper = shallow(<AudioFile/>);
        const bookName = wrapper.find('h2');
        expect(bookName.text()).toBe('The fault in our stars');
    });
    test('show book author', () => {
        const wrapper = shallow(<AudioFile/>);
        const bookAuthor = wrapper.find('h3');
        expect(bookAuthor.text()).toBe('John Green');
    });
    it('shows book genre', () => {
        const wrapper = shallow(<AudioFile/>);
        const bookGenre = wrapper.find('.audio-book-genre');
        expect(bookGenre.text()).toBe('Romance,Teenage Fiction');
    })
});