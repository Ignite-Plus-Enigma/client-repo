import React from "react";
import Row from "./Row.js";
import './styles.css';
import AutoRotatingCarousel from './AutoRotatingCarousel'
// import FooterComponent from '../FooterComponent/Footer'

export default function Browse() {
    
  return (
    
    <div>
       <AutoRotatingCarousel/> 
      <Row name="Recently Added" forapicall="recentlyadded"   />
      <hr></hr>
      <Row
        name="Textbooks " forapicall="textbooks"
      />
      <hr></hr>
      <Row
       name="Kids/Children" forapicall="children"
      />
      <hr></hr>
      <Row
        name="Most Viewed" forapicall="mostviewed"
      />
       {/* <FooterComponent/>  */}

      

    
    </div>
  );
}



