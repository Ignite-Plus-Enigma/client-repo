import React,{useEffect,useState} from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import HeadsetIcon from '@material-ui/icons/Headset';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontSize:65,
      
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },   
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth:1000,
      height:100,
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

export default function AudioSubcategoryTrial(props){

    const classes = useStyles();
    const [books,setBooks] = useState([])

    const fetchData = () => {
        console.log(props.location.pathname)
        console.log(props)
        const uniqueId = props.location.pathname.split("/")[3]
        console.log(uniqueId)
        const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/books/subcategory/'+uniqueId
        axios.get(mainCategoriesApiEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            setBooks(data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className={classes.root}>
    {console.log(books)}
    {/* <h3>I'm AudioSubcategoryTrial </h3> */}
       
    <ul classname="subcategorylist">
        {books.map((book)=>(
            <div>
                <li>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Bookimage" src={book.bookImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <h2>{book.name}</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <h3>{book.author}</h3>
                </Typography>
            </Grid>
            </Grid>
            <Grid item xs={4} sm >
            
              <div>
                
              <Rating name="size-large" defaultValue={1} size="large" readOnly />
             { /*<Typography variant="subtitle2" >pages</Typography>*/}
              </div>
            </Grid>
            <Grid item xs={2}>
                <div>
                    <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
                    <Typography variant="subtitle2">Read</Typography>
                </div>
            </Grid>
             <Grid item xs={2}>
                  <div>
                  <HeadsetIcon fontSize="large"></HeadsetIcon>
                  <Typography variant="subtitle2">Listen</Typography>
                 </div>
             </Grid>
            
             <Grid item xs={1} >
                 <div>
              <BookmarkBorderIcon fontSize="large" ></BookmarkBorderIcon>
              <Typography variant="subtitle2">Save</Typography>
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
    )

}

