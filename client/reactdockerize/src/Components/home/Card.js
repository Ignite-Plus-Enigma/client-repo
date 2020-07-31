import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 160
  },
  media: {
    height: 120
  },
});

 function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Book Image"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="textSecondary" component="h2">
        {/* <h6>{props.title}</h6> */} {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         By {props.author}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          pdf
        </Button>
        <Button size="small" color="primary">
          audio
        </Button>
      </CardActions> */}
    </Card>
  );
}
 
 export default MediaCard;