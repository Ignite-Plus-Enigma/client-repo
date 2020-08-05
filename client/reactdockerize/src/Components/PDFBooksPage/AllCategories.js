import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));
const mainCategory = [{name:'Arts',
                        subCategory:['Architecture','Art Instruction','Art History','Dance', 'Design', 'Fashion','Film','Graphic Design','Music','Music Theory','Painting','Photography']},
                        {name:'Fiction',
                        subCategory:["Fantasy", "Historical fiction","Horror","Mystery"]},
                      {name:'Science and Mathematics',
                        subCategory:['Biology','Chemistry','Math','Physics','Programming']
                      },
                    {name:'Business and Finance',
                  subCategory:['Managemennt','Entrepreneurship','Business Economics','Busin Success','Finance']},
                {
                  name:'Children',
                  subCategory:['Kids','Stories in Rhyme','Baby','Bedtime','Picture']
                },
                {name:'Text Books',
                subCategory:['History','Math','Geography','Psychology','Algebra','Education','Business','Science','English','Chemistry','Physics','Computer Science']},
            {name:'Biography',
          subCategory:['Autobiographies','History','Politics','World war','Women','Kings & rulrs','Composers','artists']},
          {name:'Social Sciences',
          subCategory:['Anthropology','Religion','Political Science','Psychology']},
          {
            name:'History',
            subCategory:['Ancient Civilization','Archaelogy','Freedom']
          },
        
    {name:'Books by Language',
  subCategory:['English','French','Spanish','German','Russian','Italian','Chinese','Japanese']}];

export default function CenteredGrid() {
//   const classes = useStyles();
  let col1 = [];
  let col2 = [];
  let col3 = [];
  let i = 0;
//   for(i = 0; i < Math.floor(mainCategory.length/3);i++){
//     col1.push(mainCategory[i]);
//  }

//  for( i = Math.floor(mainCategory.length/3); i < 2*(Math.floor)(mainCategory.length/3);i++){
//      col2.push(mainCategory[i]);
//  }
//  for(i = 2*(Math.floor)(mainCategory.length/3);i < mainCategory.length;i++){
//     col3.push(mainCategory[i]);
//  }

 const [mainCategories, setMainCategories] = useState([]);
 const fetchData = () => {
    const mainCategoriesApiEndPoint = 'http://localhost:8050/categories'
    axios.get(mainCategoriesApiEndPoint)
    .then(response => response.data)
    .then((data) => {
        setMainCategories(data);
    })
    .then(() => {
        for(var i = 0; i < Math.floor(mainCategories.length/3);i++){
            col1.push(mainCategories[i]);
        }
        
        for(var i = Math.floor(mainCategories.length/3); i < 2*(Math.floor)(mainCategories.length/3);i++){
            col2.push(mainCategories[i]);
        }
        
        for(var i = 2*(Math.floor)(mainCategories.length/3);i < mainCategories.length;i++){
            col3.push(mainCategories[i]);
        }
    })
}
useEffect(() => {
    fetchData()
}, [])

  return (
    // 
    <div>
         <Grid container>
            <Grid item xs={4}>
            
            {col1.map((singleMain) => (
                <div xs={4}>
                <h5><NavLink exact activeClassName="current" to={`/SubCategory/${singleMain.category}/`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/SubCategory/${singleMain.category}/${singleSub}/`} >{singleSub}</NavLink></li>
                ))}
                </div>
            ))}
            
            </Grid>
            <Grid item xs={4}>
            
            {col2.map((singleMain) => (
                <div xs={4}>
                <h5 aria-label="Main category"><NavLink exact activeClassName="current" to={`/SubCategory/${singleMain.category}/`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                <ul>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/SubCategory/${singleSub}/`}>{singleSub}</NavLink></li>
                ))}
                </ul>
                </div>
            ))}
            
            </Grid>
            <Grid item xs={4}>
            
            {col3.map((singleMain) => (
                <div xs={4}>
                <h5><NavLink exact activeClassName="current" to={`/SubCategory/${singleMain.category}/`} style={{color:'black'}}>{singleMain.category}</NavLink></h5>
                {singleMain.subCategory.map((singleSub) => (
                        <li><NavLink exact activeClassName="current" to={`/SubCategory/${singleSub}/`}>{singleSub}</NavLink></li>
                ))}
                </div>
            ))}
            
            </Grid>

        </Grid>

      
    </div>
  );
}