import React, { Fragment } from "react";
import first from './carousel-trial3.jpg'
import second from './carousel-trial4.jpg'
// import second from './second-carousel.JPG'
import third from "./third-carousel.JPG"
 

import ReactSimpleCarousel from "react-plain-carousel";

class AutoRotatingCarousel extends React.Component {
  state = {
    carousel: {
    },
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
              <img src={second} className="carousel-image"
                  aria-label="Welcome to Digital Library"/>
                    <div class="centered1"><b>Let’s open the gates to accessibility…
</b></div>


<div class="centered2"><b>Let’s build an inclusive society together</b></div>
{/* >>>>>>> origin/ankitha */}
<a href="https://www.samarthanam.org/donate/" target="_blank">
<button class="btn">Support Us</button></a>
            </div>
            {/* <div> 
              <img src={first} className="carousel-image"
                  aria-label="Welcome to Digital Library"/>
                    <div class="centered1-first"><b>Be the light of someone’s
life…</b></div>
<div class="centered2-first"><b>Be the smile spreader!</b></div>
<a href="https://www.samarthanam.org/donate/" target="_blank">
<button className="btn-other">Support Us</button></a>
            </div>  */}
          
         {/* <div >
              <img src={second} className="carousel-image"
                    aria-label="Play Pause and Listen to your Favourites"/>
            </div>
             <div >
              <img src={third} className="carousel-image"
                    aria-label="Play Pause and Listen to your Favourites"/>
            </div>  */}
            
          </ReactSimpleCarousel>
        </Fragment>
</Fragment>
    );
  }
}
export default AutoRotatingCarousel;