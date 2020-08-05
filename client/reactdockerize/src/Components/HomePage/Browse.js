import React from "react";
import Row from "./Row.js";
import './styles.css';
import AutoRotatingCarousel from './AutoRotatingCarousel'

export default function Browse() {
    
  return (
    
    <div>
      <AutoRotatingCarousel/>
      <Row name="Recently Added" forapicall="recentlyadded"   />
      <Row
        name="Most Viewed" forapicall="most-viewed"
      />
      <Row
        name="Textbooks " forapicall="textbooks"
      />
      <Row
       name="Kids/Children" forapicall="children"
      />

      

    
    </div>
  );
}



