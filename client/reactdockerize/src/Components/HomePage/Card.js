import React,{useState,useContext,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import HeadsetIcon from '@material-ui/icons/Headset';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import {userContext} from "../../UserContext"
import LoginDialog from "../SignInPage/LoginDialog";
import axios from "axios"
import ReactDOM from 'react-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    height :350,
    alignContent:"left"
  },
  media: {
    height: 170,
    position:"relative"
  },
  icon :{
    position:"absolute"
  }
  });

 function MediaCard(props) {
   const [book,setBook] =useState(props)
  const classes = useStyles();
  const history = useHistory();
  const {id,setId} = useContext(userContext);
  const[saved,setSaved] = useState(false)

  const [savedbook, setSavedBook] = useState(null)

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

  function handleSave(book){
    if(id === null){ 
      console.log("Entered")
      return(
      <div>
       <LoginDialog/>
       <h6>Please login to view your saved books.</h6>
       </div>
     );
    // ReactDOM.render(
    //   <React.StrictMode>
    
    //     <LoginDialog id = {id}/>
    //   </React.StrictMode>,
    //   document.getElementById('root')
    // );
    } 
     else{
       setSaved(true)
       fetchData(book);
     }
  
  }

  
  const fetchData = (book) => {

    const saveBookEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/savebook/'
    axios.post(saveBookEndPoint,{ "bookId" : book.book.id,
    "progress":[{"format":"Audio","percentage":0},{"format":"PDF","percentage":0}],
    "isFinished":"False"})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

}

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Book Image"
        />
        <CardContent>
          <Typography  variant="subTitle1"  component="h6">
      {props.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         By {props.author}
          </Typography>
          </CardContent>
          <CardActions disableSpacing>
          {console.log(book.format.pdf)}
          {book.format.pdf != null ? <IconButton aria-label="read pdf book" className="icon"   onClick={() => handlePdf({book})}>
          <PictureAsPdfIcon />
        </IconButton> : null }
        {book.format.audio != null ? <IconButton aria-label="listen to audio book" className="icon" onClick={() => handleAudio({book})}>
          <HeadsetIcon />
        </IconButton> : null }
        <IconButton className='icon' aria-label="save the book">
              {saved?  <BookmarkOutlinedIcon  onClick={() => handleUnsave({book})} fontSize="medium" /> :  <BookmarkBorderOutlinedIcon  onClick={() => handleSave({book})} fontSize="medium" />}
               </IconButton>
        
      
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
 
 export default MediaCard;