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
        name="Recently Added"
        // image1={education}
        // title1="education"
        // author1="luthor"
        // image2={fiction}
        // title2="cazyness over loaded"
        // author2="roy"
        // image3={personal}
        // text3="title"
      /> <Row
        name="Most Viewed"
      />
      <Row
        name="Textbooks "
      />
      <Row
       name="Kids/Children"
      />
    
    </div>
  );
}