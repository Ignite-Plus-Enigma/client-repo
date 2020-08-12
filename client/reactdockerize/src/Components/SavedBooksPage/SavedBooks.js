import React,{useState,useEffect,useContext} from 'react';
import Navbar from "../NavbarComponent/Navbar"
import axios from 'axios'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GoogleLogin from "react-google-login";
import '../FooterComponent/Footer.css'
import {userContext} from "../../UserContext"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HeadsetIcon from '@material-ui/icons/Headset';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import FlagIcon from '@material-ui/icons/Flag';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize:50,
    
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1)
    },   
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth:1100,
    height:140,
  },
  image: {
    width: 130,
    height: 110,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function SavedBooks(props){
    const {id,setId} = useContext(userContext);
      // alert("Google id "+msg);
      // const msg = JSON.stringify(id);
      // alert(id)
      const [user,setUser] = useState(null)
    const classes = useStyles();
    const [books,setBooks] = useState([])
    const history = useHistory();
    var i = 0

    function handleAudio(book){
      console.log(book.book.id)
      history.push(`/Audio/${book.book.id}/`)
    }
    function handlePdf(book){
      history.push(`/PDF/${book.book.id}/`)
    }
    function handleFinished(book){
      const markFinishedEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/savedbook/'+book.book.id+'/markfinished'
      // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
      axios.put(markFinishedEndPoint);
      // window.location.reload(); 
      console.log("MARKED FINISHED")
  }

  function handleUnfinished(book){
    const markUnfinished = 'http://localhost:8050/api/v1/user/'+id+'/savedbook/'+book.book.id+'/markUnfinished'
    // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
    axios.put(markUnfinished);
    // window.location.reload(); 
    console.log("MARKED UNFINISHED")
  }
      
    

    const fetchData = () => {

        const userSavedBooksApiEndPoint = 'http://localhost:8050/api/v1//user/'+id+'/savedbooks'
        const userEndPoint = "http://localhost:8050/api/v1/users/"+id

        // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
        axios.get(userSavedBooksApiEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            setBooks(data)
        })

        axios.get(userEndPoint)
        .then(response => response.data)
        .then((data) => {
          console.log("USER DATA")
            console.log(data)
            setUser(data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

        return(
          <div>
        
          <h2>Saved Books</h2>
  
          <div className={classes.root}>
      {console.log(books)}
         
      <ul classname="subcategorylist">
          {books.map((book)=>(
              <div>

                  <li style={{listStyleType:"none"}}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="Bookimage" src={book.bookImage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={8} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle2">
                  <h4>{book.name}</h4>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <h6>{book.author}</h6>
                  </Typography>
              </Grid>
              </Grid>
              <Grid item xs={8} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs={2} sm>
      
                 <Typography variant="subtitle2" >400 pages</Typography>
               </Grid>
              </Grid>
              </Grid>
              <Grid item xs={1}>
                  <div>
                     
                      {book.format.pdf != null ? <IconButton aria-label="read pdf book"   onClick={() => handlePdf({book})}>
            <PictureAsPdfIcon fontSize="large" />
          </IconButton> : null }
         
                  </div>
              </Grid>
               <Grid item xs={1}>
                    <div>
              
                    {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null }
                   </div>
               </Grid>
               
               <Grid item xs={1}>
                   <div>
                   {/* {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null } */}
          {user.savedBooks[i].isFinished == "True" ? <CheckCircleIcon fontSize="large"  onClick={() => handleUnfinished({book})}></CheckCircleIcon> : <FlagIcon fontSize="large"  onClick={() => handleFinished({book})} ></FlagIcon> }
                
             
                </div>
              </Grid>
              
               <Grid item xs={1}>
                   <div>
                <BookmarkIcon fontSize="large"  onClick={() => handleAudio({book})} ></BookmarkIcon>
                {/* <Typography variant="subtitle2">Save</Typography> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
          
        </Paper>
        </li>
        {i+=1}
        </div>
          ))}
         
  </ul>
      </div>
      </div>
      
        )
           
        
    
    }

export default SavedBooks;
