import React,{useState,useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GoogleLogin from "react-google-login";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import HeadsetIcon from '@material-ui/icons/Headset';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import {userContext} from "../../UserContext"
import LoginDialog from "../SignInPage/LoginDialog";
import axios from "axios"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReactDOM from 'react-dom';


const useStyles = makeStyles({
  root: {
    maxWidth:'100%',
    height:'100%',
    alignContent:"left",
    position:"relative"
  },
  media: {
    height:170,
    position:"relative"
  },
 
  icon :{
    position:"bottom"
  },
  

  });

 function MediaCard(props) {
   const [book,setBook] =useState(props)
  const classes = useStyles();
  const history = useHistory();
  const {id,setId} = useContext(userContext);
  const[saved,setSaved] = useState(false)
  const [open, setOpen] = useState(false);
  const [savedbook, setSavedBook] = useState(null)

  function responseGoogle(response){

      console.log(response.profileObj)
      //setName(response.profileObj.name)
      setOpen(false)
      const x = response.profileObj.googleId;
      setId(x)
      const saveUserEndPoint = "http://localhost:8050/api/v1/user/save"
  
      axios.post(saveUserEndPoint,{
        "googleId":response.profileObj.googleId,
         "savedBooks":[],
         "role":"User"
      })
  }

  function failedLogin(response){
      console.log("Login failed!")
  }

  function handleAudio(){
    console.log(book)
    history.push(`/Audio/${book.id}/`)
  }
  function handlePdf(){
    console.log(book)
    history.push(`/PDF/${book.id}/`)
  }
  function handleUnsave(){
  setSaved(false)
  }

const handleCloseDialog = () => {
    setOpen(false);
  }; 

  function handleSave(book){
    if(id === null){ 
      setOpen(true);
    } 
     else{
       setSaved(true)
       fetchData(book);
       setOpen(false);
     }
  
  }

  
  const fetchData = (book) => {

    const saveBookEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/savebook/'
    axios.post(saveBookEndPoint,{ "bookId" : book.book.id,
    "progress":[{"format":"Audio","length":0,"remaining" : 0},{"format":"PDF","length":0,"remaining" : 0}],
    "isFinished":"False"})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

}

  return (
    <div className="card-div">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Book Image"
        />
        <CardContent >
          <Typography  variant="subTitle1"  component="h6"   noWrap >
      {props.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" noWrap >
         {props.author}
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
         
          {console.log(book.format.pdf)}
          {book.format[1].url != null ? <IconButton aria-label="read pdf book" className="icon"   onClick={() => handlePdf({book})}>
          <PictureAsPdfIcon />
        </IconButton> : null }
        {book.format[0].url!=null ? <IconButton aria-label="listen to audio book" className="icon" onClick={() => handleAudio({book})}>
          <HeadsetIcon />
        </IconButton> : null }
        <IconButton className='icon' aria-label="save the book">
              {saved?  <BookmarkOutlinedIcon  onClick={() => handleUnsave({book})} fontSize="medium" /> :  <BookmarkBorderOutlinedIcon  onClick={() => handleSave({book})} fontSize="medium" />}
               </IconButton>
               
               
               </CardActions>
       
    </Card>

    <Dialog
        open={open}
        onClose={handleCloseDialog}
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
  );
}
 
 export default MediaCard;