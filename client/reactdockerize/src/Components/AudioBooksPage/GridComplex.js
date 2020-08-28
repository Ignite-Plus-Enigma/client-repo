import React,{useState,useEffect,useContext} from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GoogleLogin from "react-google-login";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HeadsetIcon from '@material-ui/icons/Headset';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import {userContext} from "../../UserContext"
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';

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

export default function GridComplex(props){
  const classes = useStyles();
  const [books,setBooks] = useState([])
  const history = useHistory();
  const {id,setId} = useContext(userContext);
  const[saved,setSaved] = useState(false)
  const [open, setOpen] = useState(false);
  const [mainCategoryProps, setMainCategoryProps] = useState("Textbooks")
  function handleAudio(book){
    history.push(`/Audio/${book.book.id}/`)
  }
  function handlePdf(book){
    history.push(`/PDF/${book.book.id}/`)
  }
  function handleSave(book){
    if(id!=null){
      const saveBookEndPoint = 'http://localhost:8050/api/v1/user/' + id+ '/savebook'
       axios.post(saveBookEndPoint,{"bookId" : book.book.id, "progress":[{"format":"Audio","percentage":0},{"format":"PDF","percentage":0}],"isFinished":"False"})
     
      setSaved(true)
      setOpen(false)
   
    }
    else {
      setOpen(true)
    }
    
  }
 
  function handleUnsave(){
    setSaved(false)
    }
    function responseGoogle(response){

      console.log(response.profileObj)
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
  const handleCloseDialog = () => {
    setOpen(false);
  }; 




    const book = props.book
    return(
        <div>
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
          <h5>{book.author}</h5>
        </Typography>
    </Grid>
    </Grid>
    </Grid>
    <Grid container wrap="nowrap" spacing={2} xs={8} sm  >
  <Grid item xs>
    <Typography  gutterBottom variant="body1">{book.description}</Typography>
  </Grid>
</Grid>
<Grid item xs={8} sm container>
    <Grid item xs container direction="row" spacing={2}>

    <Grid item xs={4}>
        <div>
            {book.format[1].url != null ? <IconButton  aria-label="read pdf book"   onClick={() => handlePdf({book})}>
   <PictureAsPdfIcon fontSize="large"/>
 </IconButton> : null }

         </div>
     </Grid>
      <Grid item xs={4}>
           <div>
   {book.format[0].url != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
   <HeadsetIcon fontSize="large"/>
 </IconButton> : null }
          </div>
      </Grid>
      <Grid item xs={4}>
          <div>
            <IconButton aria-label="save the book">
            {saved?  <BookmarkOutlinedIcon  onClick={() => handleUnsave({book})} fontSize="large" /> :  <BookmarkBorderOutlinedIcon  onClick={() => handleSave({book})} fontSize="large" />}
       </IconButton>
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
     </Grid>
    
     </Grid>
     </Grid>
 </Grid>

 </Paper> 
</div>
    )
}