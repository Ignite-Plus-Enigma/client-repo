import React,{useState} from 'react';
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

  function handleAudio(){
    console.log(book)
    history.push(`/Audio/${book.id}/`)
  }
  function handlePdf(){
    console.log(book)
    history.push(`/PDF/${book.id}/`)
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
      
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
 
 export default MediaCard;

           {/* <CardActions >
          {console.log(props)}
             <Button  id = "card-button" size="small" variant="text" color="primary" component="p"  onClick={() => handleClick({book})}>{props.format =="Audio" ? "Listen":"Read"}</Button>
          </CardActions> */}