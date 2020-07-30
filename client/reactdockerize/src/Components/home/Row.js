import React from "react";
import MediaCard from "./Card";
export default function Row(props) {
  return (
    <div><h2 id="browse-heading">{props.name} </h2>
    <div class="row">
     <div class="column">
        <MediaCard image={props.image1} title={props.title1} author={props.author1} />
      </div>
      <div class="column">
        <MediaCard image={props.image2} title={props.title2} author={props.author2} />
      </div>
      <div class="column">
        <MediaCard image={props.image3} title={props.title3}  author={props.author3}/>
      </div>
      <div class="column">
        <MediaCard image={props.image4} title={props.title4} author={props.author4}/>
      </div>
      <div class="column">
        <MediaCard image={props.image5} title={props.title5}  author={props.author5}/>
      </div>
      <div class="column">
        <MediaCard image={props.image6} title={props.title6}  author={props.author6}/>
      </div>
    </div>
    </div>
  );
}