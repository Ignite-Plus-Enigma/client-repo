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
      const msg = useContext(userContext)
  console.log("Google id "+msg);
    const [open, setOpen] = React.useState(false);
    const [id,setId] = useState(" ")
    const handleClickOpen = () => {
        if(state == "Sign In"){
            setOpen(true);
        }
        else if(state == "Sign Out"){
            setState("Sign In")
        }
      
    };
    
  
    const handleClose = () => {
      setOpen(false);
    };
    const [flag,setFlag] = useState(false)
    const [name,setName] = useState("")
    const [state, setState] = useState("Sign In")
 

    function responseGoogle(response){
        console.log(response.profileObj)
        setState("Sign Out")
        setName(response.profileObj.name)
        setOpen(false)
        const email = response.profileObj.email;
        setId(email)
        console.log(email)
        console.log(id)
    }

    function failedLogin(response){
        setState("Sign In")
    }
    
    const classes = useStyles();
    const [books,setBooks] = useState([{
      "id": "1",
      "name": "Alice's Adventures in Wonderland",
      "isbn": "935-678-234-23",
      "author": "Lewis Carrol",
      "format": {
          "pdf": {
              "url": "https://drive.google.com/uc?export=view&id=1K7eJ9Wvlvo8_2BpMmqshQi8OKBijl49E"
          },
          "audio": {
              "url": "https://drive.google.com/uc?export=view&id=1m7SqrxcbAxKyDUfYzcKP9Rbn1EMJl9QH"
          }
      },
      "language": " English",
      "bookImage": "https://drive.google.com/uc?export=view&id=1Sqc63-nx8nPnBGkOgpqs1uFLr1JcW60R",
      "description": "Alice's Adventures in Wonderland, widely beloved British children's book by Lewis Carroll.The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole",
      "views": 4,
      "category": "Children",
      "subCategory": [
          "Story books"
      ],
      "rating": 5
  },
  {
      "id": " 2",
      "name": "A Child's Garden of Verses",
      "isbn": "983-673-232-43",
      "author": "Robert Louis Stevenson",
      "format": {
          "pdf": {
              "url": "https://drive.google.com/uc?export=view&id=1liGWXNRlO0srUC6AQQtcKhepDzHJuVW3"
          },
          "audio": {
              "url": "https://drive.google.com/uc?export=view&id=1J1LhIsALHlKK9kP3qPcWjl_-yEO1V3MB"
          }
      },
      "language": " English",
      "bookImage": "https://drive.google.com/uc?export=view&id=1uB585wpdMw7tq950nI6sD4QptPLEapRL",
      "description": "",
      "views": 2,
      "category": "Children",
      "subCategory": [
          "Poems"
      ],
      "rating": 3
  }])
    const history = useHistory();
    // const [mainCategoryProps, setMainCategoryProps] = useState("Textbooks")
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

    const fetchData = () => {
        console.log(props.location.pathname)
        console.log(props)
        const v= props.location.pathname.split("/")[2]
        const uniqueId = props.location.pathname.split("/")[3]
        console.log(uniqueId)
        // const userSavedBooksApiEndPoint = 'http://localhost:8050/api/v1/books/subcategory/'+uniqueId
        const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
        // axios.get(userSavedBooksApiEndPoint)
        // .then(response => response.data)
        // .then((data) => {
        //     console.log(data);
        //     setBooks(data)
        // })
    }
    useEffect(() => {
        fetchData()
    }, [])
    if(state == "Sign In"){
        return(
            <div>
             <Button  color="secondary" onClick={handleClickOpen}>
        {state}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Have a Google Account?"}
        </DialogTitle>
        <DialogActions>
          <GoogleLogin
            clientId="992798065124-l39cdadgtpb6l4ikt8nf4m909vspjnr0.apps.googleusercontent.com"
            buttonText="Sign In With Google"
            onSuccess={responseGoogle}
            onFailure={failedLogin}
            cookiePolicy={"single_host_origin"}
          />
        </DialogActions>
      </Dialog>

            </div>
        )
    }
    else{
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
                      {/* <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
                      <Typography variant="subtitle2">Read</Typography> */}
                      {book.format.pdf != null ? <IconButton aria-label="read pdf book"   onClick={() => handlePdf({book})}>
            <PictureAsPdfIcon />
          </IconButton> : null }
         
                  </div>
              </Grid>
               <Grid item xs={1}>
                    <div>
                    {/* <HeadsetIcon fontSize="large"></HeadsetIcon>
                    <Typography variant="subtitle2">Listen</Typography> */}
                    {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
            <HeadsetIcon />
          </IconButton> : null }
                   </div>
               </Grid>
               
               <Grid item xs={1}>
                   <div>
                <CheckCircleIcon fontSize="medium" ></CheckCircleIcon>
                {/* <Typography variant="subtitle2">Save</Typography> */}
                </div>
              </Grid>
              
               <Grid item xs={1}>
                   <div>
                <BookmarkIcon fontSize="medium" ></BookmarkIcon>
                {/* <Typography variant="subtitle2">Save</Typography> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
          
        </Paper>
        </li>
        
        </div>
          ))}
         
  </ul>
      </div>
      </div>
      
        )
           
        
    }
    }

export default SavedBooks;
