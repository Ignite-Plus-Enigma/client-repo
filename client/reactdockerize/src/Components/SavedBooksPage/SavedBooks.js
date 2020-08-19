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
import LoginDialog from "../SignInPage/LoginDialog";
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';



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
  browse: {
    border: '1px solid blue',
    borderRadius: '1em',
    color:'blue'
  }
}));

function SavedBooks(props){
    const {id,setId} = useContext(userContext);
    console.log("HERE IS THE ID")
    console.log(id)
    const [user,setUser] = useState(null)
      // const {id,setId} = useContext(userContext);
      // alert("Google id "+msg);
      // const msg = JSON.stringify(id);
      // alert(id)
    const classes = useStyles();
    const [books,setBooks] = useState([])
    const [finishedBooks, setFinishedBooks] = useState([])
    const history = useHistory();
    var i = 0
    var j =0 

    const fetchData = () => {

      const userSavedBooksApiEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/savedbooks'
      const userEndPoint = "http://localhost:8050/api/v1/user/"+id
      const finishedBooksEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/finishedbooks'

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
      axios.get(finishedBooksEndPoint)
      .then(response => response.data)
      .then((data) => {
          console.log(data);
          setFinishedBooks(data)
      })
  }
  useEffect(() => {
    fetchData()
},[])

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
      fetchData();
      // window.location.reload(); 
      console.log("MARKED FINISHED")
      
  }

  function handleUnfinished(book){
    i=0
    j=0
   
    const markUnfinished = 'http://localhost:8050/api/v1/user/'+id+'/savedbook/'+book.book.id+'/markUnfinished'
    // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
    axios.put(markUnfinished);

    // window.location.reload(); 
    fetchData();
    console.log("MARKED UNFINISHED")
  }

  function handleUnsave(book){
    // alert("Are you sure you want to unsave the book?")
    const unsaveBookEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/unsavebook/'+book.book.id
    // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
    axios.put(unsaveBookEndPoint);
    // window.location.reload(); 
    console.log("book unsaved")
    
    fetchData();
  }

    const handleBrowse=()=>{
        history.push('/PDFBooks')
    }
    




        if(id === null){ return(
          <div>
           <LoginDialog/>
           <h6>Please login to view your saved books.</h6>
           </div>
         ); 
        }
        return(
          <div>
         
          {/* <h2>Saved Books</h2> */}
          {books.length === 0 ? <div className="not-found-div"> 
        
          <img src="https://mednear.com/assets/web/images/icons/empty-product.png" className="not-found-img" style={{width:`29%`}}/> 
          <p>You do not have any saved books!</p>
          <Button onClick={handleBrowse} className={classes.browse}>Browse</Button></div>:   <h2>Saved Books</h2>}
          <div className={classes.root}>
      {console.log(books)}
         
      <ul classname="subcategorylist">
    
     
          {books.map((book)=>(
            user.savedBooks.map((savedBook)=>(
              book.id === savedBook.bookId ? 
            

            
            
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
                     
                      {book.format[1].url != null ? <IconButton aria-label="read pdf book"   onClick={() => handlePdf({book})}>
            <PictureAsPdfIcon fontSize="large" />
          </IconButton> : null }
         
                  </div>
              </Grid>
               <Grid item xs={1}>
                    <div>
              
                    {book.format[0].url != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null }
                   </div>
               </Grid>
               
               <Grid item xs={1}>
                   <div>
                   {/* {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null } */}
          {/* {user.savedBooks[i++].isFinished == "True" ? <CheckCircleIcon  style={{ color: green[500] }} fontSize="large"  onClick={() => handleUnfinished({book})}></CheckCircleIcon> : <FlagIcon fontSize="large" style={{ color: red[500] }}  onClick={() => handleFinished({book})} ></FlagIcon> } */}
                {savedBook.isFinished == "True" ? <CheckCircleIcon  style={{ color: green[500] }} fontSize="large"  onClick={() => handleUnfinished({book})}></CheckCircleIcon> : <FlagIcon fontSize="large" style={{ color: red[500] }}  onClick={() => handleFinished({book})} ></FlagIcon>}
             
                </div>
              </Grid>
              
               <Grid item xs={1}>
                   <div>
                   {/* {console.log(user.savedBooks[j++].bookId)} */}
                <BookmarkIcon fontSize="large"  onClick={() => handleUnsave({book})}></BookmarkIcon>
                
                {/* <Typography variant="subtitle2">Save</Typography> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
          
        </Paper>
        </li>
        
        </div> 
        : null
            ))
          ))}
         
  </ul>
      </div>
      
      {finishedBooks.length === 0 ? null :   <div> <h2>Finished Books</h2>
          <div className={classes.root}>
      {console.log(books)}
    
      <ul classname="subcategorylist">
   
          {finishedBooks.map((book)=>(
            user.savedBooks.map((savedBook)=>(
              book.id === savedBook.bookId ? 
            

            
            
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
                     
                      {book.format[1].url != null ? <IconButton aria-label="read pdf book"   onClick={() => handlePdf({book})}>
            <PictureAsPdfIcon fontSize="large" />
          </IconButton> : null }
         
                  </div>
              </Grid>
               <Grid item xs={1}>
                    <div>
              
                    {book.format[0].url != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null }
                   </div>
               </Grid>
               
               <Grid item xs={1}>
                   <div>
                   {/* {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon fontSize="large"/>
          </IconButton> : null } */}
          {/* {user.savedBooks[i++].isFinished == "True" ? <CheckCircleIcon  style={{ color: green[500] }} fontSize="large"  onClick={() => handleUnfinished({book})}></CheckCircleIcon> : <FlagIcon fontSize="large" style={{ color: red[500] }}  onClick={() => handleFinished({book})} ></FlagIcon> } */}
                {savedBook.isFinished == "True" ? <CheckCircleIcon  style={{ color: green[500] }} fontSize="large"  onClick={() => handleUnfinished({book})}></CheckCircleIcon> : <FlagIcon fontSize="large" style={{ color: red[500] }}  onClick={() => handleFinished({book})} ></FlagIcon>}
             
                </div>
              </Grid>
              
               <Grid item xs={1}>
                   <div>
                   {/* {console.log(user.savedBooks[j++].bookId)} */}
                <BookmarkIcon fontSize="large"  onClick={() => handleUnsave({book})}></BookmarkIcon>
                
                {/* <Typography variant="subtitle2">Save</Typography> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
          
        </Paper>
        </li>
        
        </div> 
        : null
            ))
          ))}
         
  </ul>
      </div>
      </div>
      }
      </div>
      
      
        )
           
        
    
    }

export default SavedBooks;