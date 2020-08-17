import React,{useState, useEffect,useContext} from "react";
import MediaCard from "./Card";
import axios from "axios";
import ButtonBase from '@material-ui/core/ButtonBase';
import Audio from "../AudioBooksPage/Audio"
import SubCategory from "../PDFBooksPage/SubCategory"
import {NavLink} from 'react-router-dom';
import {userContext} from "../../UserContext"

import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';
import ReactDOM from "react-dom";

export default function Row(props) {

const apicall = props.forapicall;
const rootElement = document.getElementById("root");

const [flag, setFlag] = useState(false)
const [books,setBooks] = useState([])
const [bookId,setBookId] =useState(0)
const [activeBook, setActiveBook] = useState();
const {id,setId} = useContext(userContext);

  const fetchdata = () =>{
    if(props.forapicall === "recentlyadded"){
      //  const apiendpoint = "static/recentlyAddedHome.json"
        const apiendpoint = "http://localhost:8050/api/v1/books/recentlyadded"
    axios.get(apiendpoint)
            .then(response =>response.data)
            .then((data)=>{
                setBooks(data);
                   
            })
          }
    else if(props.forapicall === "textbooks"){
      const apiendpoint = "http://localhost:8050/api/v1/books/category/Textbooks"
      axios.get(apiendpoint)
              .then(response =>response.data)
              .then((data)=>{
                console.log(data)
                  setBooks(data);
                     
              })
            }
    else if(props.forapicall === "children"){
              const apiendpoint = "http://localhost:8050/api/v1/books/category/Children"
              axios.get(apiendpoint)
                      .then(response =>response.data)
                      .then((data)=>{
                          setBooks(data);
                             
                      })
                    }
                    else if(props.forapicall === "mostviewed"){
              const apiendpoint = "http://localhost:8050/api/v1/books/mostviewed"
              axios.get(apiendpoint)
                      .then(response =>response.data)
                      .then((data)=>{
                          setBooks(data);
                             
                      })
                    }

                    else if(props.forapicall ==="continuereading"){
                      const apiendpoint = "http://localhost:8050/api/v1/user/"+ id+"/continuereading"
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





  return (
    <div>
    
    <div><h2 id="browse-heading">{props.name} </h2>
        <div class="row">
    
    {      books.map((book)=>(
          
          <div class="column">
          {/* <ButtonBase
          onClick={() => handleClick({book})} > */}
        <MediaCard image={book.bookImage} title={book.name} author={book.author} id={book.id} description={book.description} format ={book.format}/>
        {/* <NavLink exact activeClassName="current" to={`/Audio/${book.id}/`} > view</NavLink>  */}
        {/* </ButtonBase> */}
      </div>
      ))}
  
    </div>
    </div>
    </div>
  );
}
