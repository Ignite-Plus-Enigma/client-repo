import React, {useState, useEffect} from 'react';
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

    
    render(){
        

        {console.log(this.props.location.pathname)}
        {console.log(this.state.books)}
        
        return(
            
          <h1>Hii</h1>

            
        )
    }

}
export default SubCategory;