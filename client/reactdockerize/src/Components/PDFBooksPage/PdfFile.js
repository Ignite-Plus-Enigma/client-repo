import React,{useState,useEffect,useRef} from 'react'
import {Component} from 'react';
import axios from "axios"




export default function PdfFile(props){
    const [bookName,setBookName] = useState()
    const [author,setAuthor] = useState()
    const[genre,setGenre] = useState()
    const[description,setDescription] = useState()
    const[bookUri,setBookUri]= useState()
    const[imageUri,setImageUri] = useState()

    // const { isLoading, data } = props;

    const textInput = useRef("pageNumber");



    const fetchData = () => {
        console.log("INSIDE PDF PAGE")
        console.log(props.location.pathname)
        const path = props.location.pathname
        const uniqueId = path.split("/")[2]
        // console.log(id)
        // const uniqueId = this.props.id;
        console.log(props.id)

             let apiSearchEndpoint = 'http://localhost:8050/api/v1/books/';
            apiSearchEndpoint+=uniqueId;
        axios.get(apiSearchEndpoint)
        .then(response => response.data)
        .then((data) => {
            setBookName(data.name)
            setGenre(data.category);
            setAuthor(data.author)
            setImageUri(data.bookImage)
            setBookUri(data.format.pdf.url)
            setDescription(data.description)
        })

    }
    useEffect(()=>{
fetchData();
    })
window.setInterval(function(){
    var x = document.getElementById('PageNumberHolder')
        // console.log("PLEASE LOAD")
        // console.log(x)
        // var name = React.findDOMNode('pageNumber');
        // console.log(name)
  }, 10000);



  return (
    <div>

        <h2 className = "book-name">{bookName}</h2>
        <h3 className = "author-name">{author}</h3>
        <h6 className = "audio-book-genre">{genre}</h6>
        <iframe src={bookUri} class="pdf-book-view" ref = {textInput} ></iframe>
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

  // export default class PdfFile extends Component{
//     constructor(props) {
//         super(props);
//         // const apiendpoint = this.props.location.pathname;
//         this.state = {
//             bookName:'',
//             author:'',
//             genre:'',
//             bookUri: '',
//             imageUri:'',
//             description:''
//         }
//     }
//     //https://drive.google.com/uc?export=view&id=1k39obE9zdCtsVy6gFkm4TPWfJtOApfg1
//     //https://drive.google.com/file/d/1k39obE9zdCtsVy6gFkm4TPWfJtOApfg1/view?usp=sharing
//     componentDidMount(){
//         console.log("INSIDE PDF PAGE")
//         console.log(this.props.location.pathname)
//         const path = this.props.location.pathname
//         const uniqueId = path.split("/")[2]
//         // console.log(id)
//         // const uniqueId = this.props.id;
//         console.log(this.props.id)
        
//         let apiSearchEndpoint = 'http://localhost:8050/api/v1/books/';
//         apiSearchEndpoint+=uniqueId;
//         axios.get(apiSearchEndpoint)
//             .then(response =>response.data)
//             .then((data)=>{
//                 console.log("here")
//                 console.log(data)    
//                 this.setState({
                    
//                     bookName:data.name,
//                     author:data.author,
//                     genre:data.genre,
//                     imageUri:data.bookImage,
//                     bookUri:data.format.pdf.url,
//                     description:data.description
//                     });  
//                     console.log(data)     
//             })
//     }

//     componentWillUnmount(){
//         {document.getElementById('PageNumberHolder') ? console.log(document.getElementById('PageNumberHolder')) : console.log("loading")}
//     }

//     render(){
//         return (
//             <div>
           
        
//                 <h2 className = "book-name">{this.state.bookName}</h2>
//                 <h3 className = "author-name">{this.state.author}</h3>
//                 <h6 className = "audio-book-genre">{this.state.genre}</h6>
//                 <iframe src={this.state.bookUri} class="pdf-book-view"></iframe>
//                 <div>
//                     <h5 className="book-recommendation-heading">Description</h5>
//                     <p className = "audio-description">
//                         {this.state.description}
//                     </p>
//                 </div>
//                 <div>
//                     <hr className ="audio-page-hr"/>
//                 </div>
//                 <h6 className="book-recommendation-heading">YOU MAY ALSO LIKE:</h6>
//                 <div className="recommendation-div">

//                 </div>
               
            
//             </div>
//         );
//     }

// }
