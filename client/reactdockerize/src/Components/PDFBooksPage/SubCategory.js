import React, {useState, useEffect} from 'react';
import MediaCard from "../HomePage/Card";
import ButtonBase from '@material-ui/core/ButtonBase';
import {NavLink} from 'react-router-dom';
import axios from "axios"
import ReactDOM from "react-dom";
import Audio from "../AudioBooksPage/Audio"
import history from "history"

import {BrowserRouter,Route,Switch,Router} from 'react-router-dom';

class SubCategory extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            books:[]
        }
    }
    componentDidMount(){
        const apiendpoint = this.props.location.pathname;
        console.log(apiendpoint)
        console.log("CHECK FOR PROPS")
        console.log(this.props)
        let apiSearchEndpoint = 'http://localhost:8050/books/format/PDF'+apiendpoint;
        
        axios.get(apiSearchEndpoint)
            .then(response =>response.data)
            .then((data)=>{
                this.setState({
                    books:data
                    });
                    // console.log(this.state.books)
                    
            })

        
    }
    
    
    render(){
        {console.log(this.props.location.pathname)}
        {console.log(this.state.books)}
       
        
        return(
            
          <div>
              {this.state.books.map((book)=>(
          
          <div class="row">
         
        <MediaCard image={book.bookImage} title={book.name} author={book.author} id={book.id} />
        
      </div>
      ))}
          </div>
        )
}
}
export default SubCategory;