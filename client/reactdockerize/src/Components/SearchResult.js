import React from 'react'
import {Component} from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import AudioFile from './AudioFile'
export default class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state={
            allBooks:[{
                id:1,
                title:"The fault in our stars",
                author:"John Green",
                format:"audio,pdf"
            },
            {
                id:2,
                title:"Two States",
                author:"Chetan Bhagat",
                format:"pdf"
            }
        ]
        }
    }
    componentDidMount(){
        let apiSearchEndPoint = 'localhost://8080/api/search';
        // axios.get(apiSearchEndpoint).
        //.then(response => response.data)
        //.then((data) => {
        //         this.setState({allBooks:response});
            
        // });
    }
    render(){
        return( 
        <div>
            <h3>Search Results page </h3>
            {this.state.allBooks.length === 0 ? 
                <h6>"Oops, we did not find any matches for that</h6> : 
            
                <ul className = "search-result-ul">
                    {this.state.allBooks.map((book, index) => (
                    <div>
                        <li>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                    {book.format.includes('audio') ? <Card.Link href="/audio">Audio Book</Card.Link> : null}
                    {book.format.includes('pdf') ? <Card.Link href="/pdf">Pdf Book</Card.Link> : null}
                
                    </Card.Body>
                </Card>
                <div>
                    <br/>
                </div>
                </li>
                </div>
                    ))}
                </ul>
                }
        </div>
        );
    }
}
