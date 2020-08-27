import React,{useState, useEffect,useContext} from "react";
import MediaCard from "./Card";
import axios from "axios";
import {userContext} from "../../UserContext"

export default function Row(props) {

const apicall = props.forapicall;

const [books,setBooks] = useState([])
const {id,setId} = useContext(userContext);

  const fetchdata = () =>{

    if(props.forapicall === "recentlyadded"){
       //const apiendpoint = "static/recentlyAddedHome.json"
         const apiendpoint = "http://localhost:8050/api/v1/books/recentlyadded"
    axios.get(apiendpoint)
            .then(response =>response.data)
            .then((data)=>{
                setBooks(data);
                   
            })
          }
    else if(props.forapicall== "textbooks"){
      //const apiendpoint = "static/recentlyAddedHome.json"
      const apiendpoint = "http://localhost:8050/api/v1/books/category/Textbooks"
      axios.get(apiendpoint)
              .then(response =>response.data)
              .then((data)=>{
                  setBooks(data);
                     
              })
            }
    else if(props.forapicall === "children"){
              //const apiendpoint = "static/recentlyAddedHome.json"
              const apiendpoint = "http://localhost:8050/api/v1/books/category/Children"
              axios.get(apiendpoint)
                      .then(response =>response.data)
                      .then((data)=>{
                          setBooks(data);
                             
                      })
                    }
                    else if(props.forapicall === "mostviewed"){
                      //const apiendpoint = "static/recentlyAddedHome.json"
              const apiendpoint = "http://localhost:8050/api/v1/books/mostviewed"
              axios.get(apiendpoint)
                      .then(response =>response.data)
                      .then((data)=>{
                          setBooks(data);
                             
                      })
                    }

                    else if(props.forapicall ==="continuereading"){
                      //const apiendpoint = "static/recentlyAddedHome.json"
                      const apiendpoint = "http://localhost:8050/api/v1/user/"+ id+"/continuereading"
                      axios.get(apiendpoint)
                              .then(response =>response.data)
                              .then((data)=>{
                                  setBooks(data);
                                     
                              })
                             
                    }
                    else {
                        //const apiendpoint = "static/recentlyAddedHome.json"
                      
                        const apiendpoint = "http://localhost:8050/api/v1/books/category/"+apicall;
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
    { books.length == 0? null :
    <div><h2 id="browse-heading">{props.name} </h2>
        <div class="row">
       
    
    {    books.map((book)=>(
          
          <div class="column">
         
        <MediaCard image={book.bookImage} title={book.name} author={book.author} id={book.id} description={book.description} format ={book.format}/>
      
      </div>
      ))}
  
    </div>
    </div>
    }
    </div>
    
  );
}
