import React from 'react'
import {Component} from 'react';
import axios from "axios"


function Pdf(props){
    const [bookName,setBookName] = useState()
    const [author,setAuthor] = useState()
    const[genre,setGenre] = useState()
    const[description,setDescription] = useState()
    const[bookUri,setBookUri]= useState()
    const[imageUri,setImageUri] = useState()


    const fetchData = () => {

             let apiSearchEndpoint = 'http://localhost:8050/api/v1/books/';
            apiSearchEndpoint+=uniqueId;
        axios.get(apiSearchEndpoint)
        .then(response => response.data)
        .then((data) => {
            setBookName(data.name)
            setGenre(data.category);
            setAuthor(data.author)
            setImageUri(data.bookImage)
            setBookUri(data.format[1].url)
            setDescription(data.description)
        })

    }
    useEffect(() => {
      fetchData()
  },[])


  return (
    <div>

        <h2 className = "book-name">{bookName}</h2>
        <h3 className = "author-name">{author}</h3>
        <h6 className = "audio-book-genre">{genre}</h6>
        <iframe src={bookUri} class="pdf-book-view"></iframe>
        <div>
            <h5 className="book-recommendation-heading">Description</h5>
            <p className = "audio-description">
                {description}
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

export default SavedBooks;