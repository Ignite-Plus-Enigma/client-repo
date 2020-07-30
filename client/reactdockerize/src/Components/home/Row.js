import React,{useState, useEffect} from "react";
import MediaCard from "./Card";
import axios from "axios";
export default function Row(props) {

const apicall = props.forapicall;
const [books,setBooks] = useState([])

  const fetchdata = () =>{
    const apiendpoint = "http://localhost:8050/books/recentlyadded"
    axios.get(apiendpoint)
            .then(response =>response.data)
            .then((data)=>{
                setBooks(data);
                   
            })
    
  }
  useEffect(()=>{
    fetchdata();
  })
  return (
    <div><h2 id="browse-heading">{props.name} </h2>
        <div class="row">
        {books.map((book)=>(
          <div class="column">
        <MediaCard image={book.bookImage} title={book.name} author={book.author} />
      </div>
      ))}
  
    </div>
    </div>

  );
}