import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Audio from './Components/Audio';
import App from './App';
import axios from 'axios'
import Song from '../public/Audio/The Vamps-Wake Up.mp3';

configure({adapter: new Adapter()});

jest.mock("axios", () => {
    return{
        get: jest.fn(() =>
            Promise.resolve({
                data: {
                    name: "The fault in our stars",
                    author:"John Green",
                    genre:"Romance",
                    bookImage:"https://www.google.co.in/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fheadphone&psig=AOvVaw1n-XBjKZenybdHcLXe7uRR&ust=1596477485910000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjtk56M_eoCFQAAAAAdAAAAABAD",
                    bookUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    description:"Hazel Grace loves Augustus"
                }
            })

        )
    };
});

// describe('AudioFile component heading', () => {
//     test('shows book name', () => {
//         const wrapper = shallow(<AudioFile />);
//         const bookName = wrapper.find('h2');
//         expect(bookName.text()).toBe('The fault in our stars');
//     });
//     test('show book author', () => {
//         const wrapper = shallow(<AudioFile/>);
//         const bookAuthor = wrapper.find('h3');
//         expect(bookAuthor.text()).toBe('John Green');
//     });
//     it('shows book genre', () => {
//         const wrapper = shallow(<AudioFile/>);
//         const bookGenre = wrapper.find('.audio-book-genre');
//         expect(bookGenre.text()).toBe('Romance,Teenage Fiction');
//     })
// });
describe('Play pause toggle',() => {
    test('Initially shows play button', () => {
        const wrapper = shallow(<Audio/>);
        const playButton = wrapper.find('.toggle');
        expect(playButton.length).toBe(1);
        expect(playButton.text()).toBe('►');

    });
    test('perform axios get', () => {
        const wrapper = shallow(<Audio/>);
        const playButton = wrapper.find('.toggle');
        expect(playButton.length).toBe(1);
        // playButton.simulate('click')
        // expect(playButton.text()).toBe('❚ ❚');
        expect(axios.get).toHaveBeenCalledTimes(2);
    })
    // test('call fn on click of play button', () => {
    //     let playAudio = jest.fn();
    //     const wrapper = shallow(<Audio/>);
    //     const playButton = wrapper.find('.toggle');
    //     expect(playButton.length).toBe(1);
    //     playButton.simulate('click')
    //     expect(playAudio).toHaveBeenCalled();
    // });
})