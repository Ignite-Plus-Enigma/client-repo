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
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import Tabs from '../PDFBooksPage/Tabs'
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import '../FooterComponent/Footer.css';
// import history from "history"


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
  
  
export default function AudioSubcategoryTrial(props){
     
    const classes = useStyles();
    const [books,setBooks] = useState([])
    const history = useHistory();
    const [mainCategoryProps, setMainCategoryProps] = useState("Textbooks")
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
        setMainCategoryProps(v)
        console.log(v)
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
      <div>
        <Breadcrumbs aria-label="breadcrumb">
      
      <Link
        color="inherit"
        href="http://localhost:3000/PDFBooks/"
        
      >
        PDFBooks
      </Link>
      <Typography color="textPrimary">Textbooks</Typography>
    </Breadcrumbs>
        <h1>{mainCategoryProps}</h1>
       {console.log(mainCategoryProps) }
       {console.log("MainCatProps")}
        <Tabs mainCat={mainCategoryProps}/>
        <hr id="tabDivider"></hr>
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
                    {/* <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
                    <Typography variant="subtitle2">Read</Typography> */}
                    {book.format.pdf != null ? <IconButton  aria-label="read pdf book"   onClick={() => handlePdf({book})}>
          <PictureAsPdfIcon fontSize="large"/>
        </IconButton> : null }
       
                </div>
            </Grid>
             <Grid item xs={4}>
                  <div>
          {book.format.audio != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
          <HeadsetIcon fontSize="large"/>
        </IconButton> : null }
                 </div>
             </Grid>
             <Grid item xs={4}>
                 <div>
                   <IconButton aria-label="save the book">
              <BookmarkBorderIcon fontSize="large" />
              </IconButton>
             </div>
            </Grid>
            <Grid item xs={2} sm >
             <div>
             <Rating name="size-large" defaultValue={book.rating} size="large" readOnly />
            </div>
          </Grid>
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