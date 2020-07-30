import React from "react";
import Row from "./Row.js";
// import fiction from "./browse-images/fiction.jpg";
// import education from "./browse-images/education.jpg";
// import personal from "./browse-images/personal-dev.jpg";
import './styles.css'

export default function Browse() {
    
  return (
    
    <div>
      <Row
         name="Recently Added" forapicall="recentlyadded"
      /> <Row
        name="Most Viewed" forapicall="most-viewed"
      />
      <Row
        name="Textbooks " forapicall="education"
      />
      <Row
       name="Kids/Children" forapicall="teen"
      />
    
    </div>
  );
}