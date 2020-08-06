import React from "react";
import Row from "./Row.js";
import './styles.css';
import AutoRotatingCarousel from './AutoRotatingCarousel'
import FooterComponent from '../FooterComponent/Footer'

export default function Browse() {
    
  return (
    
    <div>
       <AutoRotatingCarousel/> 
      <Row name="Recently Added" forapicall="recentlyadded"   />
      
      <Row
        name="Textbooks " forapicall="textbooks"
      />
      <Row
       name="Kids/Children" forapicall="children"
      />
      <Row
        name="Most Viewed" forapicall="mostviewed"
      />
      <FooterComponent/>

      

    
    </div>
  );
}



