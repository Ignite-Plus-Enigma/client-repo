import React from 'react'
import {Component} from 'react';
import axios from "axios"


export default class PdfFile extends Component{
    constructor(props) {
        super(props);
        // const apiendpoint = this.props.location.pathname;
        console.log("Hi")
        this.state = {
            bookName:'The Fault In Our Stars',
            author:'John Green',
            genre:'Romance',
            bookUri: 'https://drive.google.com/uc?export=view&id=1k39obE9zdCtsVy6gFkm4TPWfJtOApfg1',
            imageUri:'',
            description:'Hazel Grace who has cancer falls in love with another teenage boy Augustus Waters who changes her life for good'
        }
    }
    //https://drive.google.com/uc?export=view&id=1k39obE9zdCtsVy6gFkm4TPWfJtOApfg1
    //https://drive.google.com/file/d/1k39obE9zdCtsVy6gFkm4TPWfJtOApfg1/view?usp=sharing
    componentDidMount(){
        console.log("INSIDE PDF PAGE")
        console.log(this.props.location.pathname)
        const path = this.props.location.pathname
        const uniqueId = path.split("/")[2]
        // console.log(id)
        // const uniqueId = this.props.id;
        console.log(this.props.id)
        
        let apiSearchEndpoint = 'http://localhost:8050/books/';
        apiSearchEndpoint+=uniqueId;
        axios.get(apiSearchEndpoint)
            .then(response =>response.data)
            .then((data)=>{
                this.setState({
                    bookName:data.name,
                    author:data.author,
                    genre:data.genre,
                    imageUri:data.bookImage,
                    bookUri:data.bookUrl,
                    description:data.description
                    });       
            })
    }

    render(){
        return (
            <div>
                <h2 className = "book-name">{this.state.bookName}</h2>
                <h3 className = "author-name">{this.state.author}</h3>
                <h6 className = "audio-book-genre">{this.state.genre}</h6>
                <iframe src={this.state.bookUri} class="pdf-book-view"></iframe>
                <div>
                    <h5 className="book-recommendation-heading">Description</h5>
                    <p className = "audio-description">
                        {this.state.description}
                    </p>
                </div>
                <div>
                    <hr className ="audio-page-hr"/>
                </div>
                <h6 className="book-recommendation-heading">YOU MAY ALSO LIKE:</h6>
                <div className="recommendation-div">

                </div>
            
            </div>
        );
    }

}
