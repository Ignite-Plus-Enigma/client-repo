import React,{useContext} from "react";
import Row from "./Row.js";
import './styles.css';
import AutoRotatingCarousel from './AutoRotatingCarousel'
// import FooterComponent from '../FooterComponent/Footer'
import '../FooterComponent/Footer.css'
import {userContext} from "../../UserContext"

export default function Browse() {
  const {id,setId} = useContext(userContext);
    
  return (
    
    <div>
       <AutoRotatingCarousel/> 
       {id!== null ? <Row name = "Continue Reading" forapicall="continuereading"/> : null}
      <Row name="Recently Added" forapicall="recentlyadded"   />
      <hr style={{margin:0}}></hr>
      <Row
        name="Textbooks " forapicall="textbooks"
      />
      <hr style={{margin:0}}></hr>
      <Row
       name="Kids/Children" forapicall="children"
      />
      <hr style={{margin:0}}></hr>
      <Row
        name="Most Viewed" forapicall="mostviewed"
      />
       {/* <FooterComponent/>  */}

      

    
    </div>
  );
}



