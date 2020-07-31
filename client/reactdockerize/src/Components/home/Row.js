import React,{useState, useEffect} from "react";
import MediaCard from "./Card";
import axios from "axios";
import ButtonBase from '@material-ui/core/ButtonBase';
import Audio from "../Audio"
import SubCategory from "../SubCategory"
import {NavLink} from 'react-router-dom';

import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';
import ReactDOM from "react-dom";

export default function Row(props) {

const apicall = props.forapicall;
const rootElement = document.getElementById("root");

const [flag, setFlag] = useState(false)
const [books,setBooks] = useState([])
const [bookId,setBookId] =useState(0)
const [activeBook, setActiveBook] = useState();

  const fetchdata = () =>{
    if(props.forapicall === "recentlyadded"){
      const apiendpoint = "http://localhost:8050/books/recentlyadded"
    axios.get(apiendpoint)
            .then(response =>response.data)
            .then((data)=>{
                setBooks(data);
                   
            })
          }
    else if(props.forapicall === "textbooks"){
      const apiendpoint = "http://localhost:8050/books/category/TextBooks"
      axios.get(apiendpoint)
              .then(response =>response.data)
              .then((data)=>{
                  setBooks(data);
                     
              })
            }
    else if(props.forapicall === "children"){
              const apiendpoint = "http://localhost:8050/books/category/Children"
              axios.get(apiendpoint)
                      .then(response =>response.data)
                      .then((data)=>{
                          setBooks(data);
                             
                      })
                    }

    }
    
    
    
  
  useEffect(()=>{
    fetchdata()
  },[])

  function handleClick(book){
    console.log("The book is")
    console.log(book)
    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <React.StrictMode>
        <Audio id={book.book.id} />
      </React.StrictMode>,
      rootElement
    );

}




  return (
    <div>
    <BrowserRouter>
        <Switch>
          <Route exact path="Audio/" component={Audio}/>
        </Switch>
      </BrowserRouter>
    
    <div><h2 id="browse-heading">{props.name} </h2>
        <div class="row">
        {books.map((book)=>(
          
          <div class="column">
          <ButtonBase
          onClick={() => handleClick({book})} >
        <MediaCard image={book.bookImage} title={book.name} author={book.author} />
        {/* <NavLink exact activeClassName="current" to={`/Audio/${book.id}/`} > view</NavLink>  */}
        </ButtonBase>
      </div>
      ))}
  
    </div>
    </div>
    </div>
  );
}
