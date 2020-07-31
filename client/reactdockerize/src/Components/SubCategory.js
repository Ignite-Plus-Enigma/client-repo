import React, {useState, useEffect} from 'react';
import MediaCard from "./home/Card";
import ButtonBase from '@material-ui/core/ButtonBase';
import {NavLink} from 'react-router-dom';
import axios from "axios"
import MediaCard from "./home/Card";
import ButtonBase from '@material-ui/core/ButtonBase';
import ReactDOM from "react-dom";
import Audio from "./Audio"
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
    

    // handleClick = ((book) => {
    //     console.log(book)
    //     setBookId(book.book.id)
    //     console.log(book.book.format)
    //      if(book.book.format === "PDF"){
    //        console.log("RENDER PDF BOOK")
    //      }
    //      else if(book.book.format ==="Audio"){
    //       return (
    //         <div>
    //            <BrowserRouter>
    //          <Switch>
    //            <Route exact path="Audio/" component={Audio}/>
    //          </Switch>
    //        </BrowserRouter>
    //         </div>
    //       )
     
           
    //      }
    //    });
    
    render(){
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
            // if(book.book.format ==="PDF"){
            //     this.props.history.push(`PDFBooks/${book.book.id}`)
            // }
            // else if (book.book.format ==="Audio"){
            //     this.props.history.push(`Audio/${book.book.id}`)
            // }

        
        }
        

        {console.log(this.props.location.pathname)}
        {console.log(this.state.books)}
       
        
<<<<<<< HEAD
       
        return (
            <div>
            <div><h2 id="browse-heading"> </h2>
               
                {this.state.books.map((book)=>(
                  
                  <div class="row">
                  <ButtonBase onClick={() => handleClick({book})}>
                <MediaCard image={book.bookImage} title={book.name} author={book.author} />
                </ButtonBase>
              </div>
              ))}
            </div>
            </div>
=======
        return(
            
          <div>
              {this.state.books.map((book)=>(
          
          <div class="column">
          <ButtonBase
          onClick={() => handleClick({book})} >
        <MediaCard image={book.bookImage} title={book.name} author={book.author} />
        <NavLink exact activeClassName="current" to={`/Audio/${book.id}/`} > view</NavLink> 
        </ButtonBase>
      </div>
      ))}
          </div>

            
>>>>>>> 97b8d7bd46acd2cb1140c9b7bed33b7e7fa958af
        )
}
}
export default SubCategory;