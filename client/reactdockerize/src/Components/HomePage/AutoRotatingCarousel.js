import React, { Fragment } from "react";
import first from './first.png'
import second from './second.png'

import ReactSimpleCarousel from "react-plain-carousel";

class AutoRotatingCarousel extends React.Component {
  state = {
    carousel: {},
    index: 0
  };

  next = () => {
    this.state.carousel.next();
  };

  prev = () => {
    this.state.carousel.prev();
  };

  moveTo = index => () => {
    this.state.carousel.moveTo(index);
  };

  handleMount = carousel => {
    this.setState({ carousel });
  };

  handleTransitionEnd = ({ index }) => {
    this.setState({ index });
  };

  render() {
    return (
      <Fragment>
        <Fragment>
          <ReactSimpleCarousel isInfinity autoplay className="carousel">
            <div> 
              <img src={first}
                  aria-label="Welcome to Digital Library"/>
            </div>
            <div >
              <img src={second}
                    aria-label="Play Pause and Listen to your Favourites"/>
            </div>
            
          </ReactSimpleCarousel>
        </Fragment>

        
        
      </Fragment>
    );
  }
}
export default AutoRotatingCarousel;
