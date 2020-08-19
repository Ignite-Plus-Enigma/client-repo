import React,{useEffect,useState,useContext} from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HeadsetIcon from '@material-ui/icons/Headset';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import Tabs from '../PDFBooksPage/Tabs'
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import {userContext} from "../../UserContext"
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
// import history from "history"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontSize:35,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1)
      },   
    },
    paper: {
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      maxWidth:1100,
      height:160,
    },
    image: {
      width: 140,
      height: 140,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
  
  export default function audioComplexGrid(props){
    const classes = useStyles();
    const [books,setBooks] = useState([])
    const history = useHistory();
    const {id,setId} = useContext(userContext);
    const[saved,setSaved] = useState(false)
    function handleAudio(book){
        console.log(book.book.id)
        // eslint-disable-next-line no-restricted-globals
        history.push(`/Audio/${book.book.id}/`)
      }
      function handlePdf(book){
        console.log(book.book.id)
        // eslint-disable-next-line no-restricted-globals
        history.push(`/PDF/${book.book.id}/`)
      }
      function handleSave(book){
        if(id!=null){
          const saveBookEndPoint = 'http://localhost:8050/api/v1/user/' + id+ '/savebook'
          axios.post(saveBookEndPoint,{"bookId" : book.book.id, "progress":[{"format":"Audio","percentage":0},{"format":"PDF","percentage":0}],"isFinished":"False"})
          fetchData();
        }
        setSaved(true)
  
      }
      function handleUnsave(){
        setSaved(false)
        }
        return (
          <div>
            <h1>Hi</h1>
            {console.log("Inside audio complex grid")}
            {console.log(props)}
            {alert("inside complex")}
          </div>
        )
 }
