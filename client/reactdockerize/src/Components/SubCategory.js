import React, {useState, useEffect} from 'react';
import MediaCard from "./home/Card";
import ButtonBase from '@material-ui/core/ButtonBase';
import {NavLink} from 'react-router-dom';
import axios from "axios"

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
        

        {console.log(this.props.location.pathname)}
        {console.log(this.state.books)}
        
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

            
        )
    }

}
export default SubCategory;