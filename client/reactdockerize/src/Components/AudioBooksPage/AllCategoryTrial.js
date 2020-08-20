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
        //     for(var i = 0; i < Math.floor(data.length/3);i++){
        //       // console.log(mainCategories[i].category)
        //       col1.push(data[i]);
        //   }
        //   // console.log(col1)
          
        //   for(var i = Math.floor(data.length/3); i < 2*(Math.floor)(data.length/3);i++){
        //       col2.push(data[i]);
        //       // console.log(mainCategories[i].category)
        //   }
          // console.log(col2)
          var c = []
          for(var i = 2*(Math.floor)(data.length/3);i < data.length;i++){
              c.push(data[i]);
              console.log("data")
              console.log(data[i])
              console.log("this is column3")
              console.log(col3)
    
              // console.log(data[i].category)
          }
          setCol3(c);
        })
    }
  useEffect(() => {
    fetchData()
},[])

 
        return(
          <div>
         <h1>Categories</h1>
         {col3.map((singleMain)=>(
             <li>{singleMain.category}</li>
             
         ))}
      </div>
      
      
        )
           
        
    
    
}
