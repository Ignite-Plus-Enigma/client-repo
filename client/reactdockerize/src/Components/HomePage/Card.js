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


const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    height :300,
  },
  media: {
    height: 150
  },
  });

 function MediaCard(props) {
   const [book,setBook] =useState(props)
  const classes = useStyles();
  const history = useHistory();

  function handleClick(){
    console.log(book)
    history.push(`/Audio/${book.id}/`)
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
          <Typography gutterBottom variant="h5" component="h2">
      <h6>{props.title}</h6> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         By {props.author}
          </Typography>
          <CardActions >
             <Button  id = "card-button" size="small" variant="text" color="primary" component="p"  onClick={() => handleClick({book})}>{props.format =="Audio" ? "Listen":"Read"}</Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
 
 export default MediaCard;