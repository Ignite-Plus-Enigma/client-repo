import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';




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
  browse: {
    border: '1px solid blue',
    borderRadius: '1em',
    color:'blue'
  }
}));

export default function AllCategoryTrial(props){
    const [col3,setCol3] = useState([])
    const [col2,setCol2] = useState([])
    const [col1,setCol1] = useState([])
    const [col4,setCol4] = useState([])
    const [mainCategories, setMainCategories] = useState([]);

    const fetchData = ()  => {
        const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/categories'
        axios.get(mainCategoriesApiEndPoint)
        .then(response => response.data)
        .then((data) => {
          console.log("Check here for data")
            // console.log(response.data)
            console.log(data);
            setMainCategories(data)
            console.log("set main categories")
            console.log(mainCategories)
            var c = []
            for(var i = 0; i < Math.floor(data.length/4);i++){
              // console.log(mainCategories[i].category)
              c.push(data[i]);
            }
            setCol1(c);
          c = []
          
          // for(var i = Math.floor(data.length/4); i < 2*(Math.floor)(data.length/4);i++){
          //     c.push(data[i]);
          //     // console.log(mainCategories[i].category)
          // }
          // setCol2(c);
          // c = []
          
          for(var i = 2*(Math.floor)(data.length/4);i < 3*(Math.floor)(data.length/4);i++){
              c.push(data[i]);
              // console.log(data[i].category)
          }
          setCol3(c);
          c = []
          
          for(var i = 3*(Math.floor)(data.length/4);i < data.length;i++){
              c.push(data[i]);
              // console.log(data[i].category)
          }
          setCol4(c);
        })
    }
  useEffect(() => {
    fetchData()
},[])

 
        return(
          <div>
         <div>
    {console.log("here is main category")}
    {console.log(mainCategories)}
         <Grid container>
            <Grid item xs={3}>
            <div>
           
            {col1.map((singleMain) => (
                
                <div xs={3}>
                {/* {console.log("HERE")}
                {console.log(singleMain)} */}
                <h5 id ="category-heading"><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.category}/Physics`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.category}/${singleSub}/`} >{singleSub}</NavLink></li>
                ))}
                </div>
            ))}
            </div>
            </Grid>
            
            <Grid item xs={3}>
            
            {/* {col2.map((singleMain) => (
                <div xs={3}>
                <h5 id ="category-heading" aria-label="Main category"><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.name}/Physics`} style={{color:'black'}}>{singleMain.name}</NavLink></h5>
                <ul>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.name}/${singleSub}/`}>{singleSub}</NavLink></li>
                ))}
                </ul>
                <h1> {singleMain}</h1>
                </div>
            ))} */}
            
            </Grid>
            <Grid item xs={3}>
            
            {col3.map((singleMain) => (
                <div xs={3}>
                {console.log("col3 in render")}
                {console.log(col3)}
                <h5 id ="category-heading"><NavLink exact activeClassName="current" to={`/PDFSubCategory/${singleMain.category}/Physics`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.name}/${singleSub}`}>{singleSub}</NavLink></li>
                ))}
             
                </div>
            )
            )
            }
            {col4.map((singleMain) => (
                <div xs={3}>
                {console.log("col4 in render")}
                {console.log(col4)}
                <h5 id ="category-heading"><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.category}/Physics`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/PDFSubcategory/${singleMain.category}/${singleSub}`}>{singleSub}</NavLink></li>
                ))}
             
                </div>
            )
            )
            }
            
            
            
            </Grid>

        </Grid>

      
    </div>
      </div>
      
      
        )
           
        
    
    
}
