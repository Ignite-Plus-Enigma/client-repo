import React,{useEffect,useState,useContext} from "react"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import AudioTabs from "./AudioTabs"
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import {userContext} from "../../UserContext"
import GridComplex from "./GridComplex"



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
    const {id,setId} = useContext(userContext);
    const[saved,setSaved] = useState(false)
    const [mainCategoryProps, setMainCategoryProps] = useState("Textbooks")
    function handleAudio(book){
      // eslint-disable-next-line no-restricted-globals
      history.push(`/Audio/${book.book.id}/`)
    }
    function handlePdf(book){
      // eslint-disable-next-line no-restricted-globals
      history.push(`/PDF/${book.book.id}/`)
    }
    function handleSave(book){
      if(id!=null){
        const saveBookEndPoint = 'http://localhost:8050/api/v1/user/' + id+ '/savebook'
        axios.post(saveBookEndPoint,{"bookId" : book.book.id, "progress":[{"format":"Audio","percentage":0},{"format":"PDF","percentage":0}],"isFinished":"False"})
        fetchData();
      }
      setSaved(true)

    }
    function handleUnsave(){
      setSaved(false)
      }

    const fetchData = () => {
        const v= props.location.pathname.split("/")[2]
        setMainCategoryProps(v)
        const uniqueId = props.location.pathname.split("/")[3]
        const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/books/format/Audio/subcategory/'+uniqueId
        axios.get(mainCategoriesApiEndPoint)
        .then(response => response.data)
        .then((data) => {
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
        href="http://localhost:3000/AudioBooks/"
        
      >
        AudioBooks
      </Link>
      <Typography color="textPrimary">Textbooks</Typography>
    </Breadcrumbs>
        <h1 className = "main-category-heading">{mainCategoryProps}</h1>
       <AudioTabs mainCat={mainCategoryProps} subCat = {props.location.pathname.split("/")[3]}/>
        <hr id="tabDivider"></hr>
        <div className={classes.root}>
       
    <ul classname="subcategorylist">
        {books.map((book)=>(
             <div>
                <li style={{listStyleType:"none"}}>
                <GridComplex book ={book}/>
     
      </li>
      
      </div>
        ))}
       
</ul>
    </div>
    </div>
    )

}