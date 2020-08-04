import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SubCategory from './SubCategory'

import {BrowserRouter,Route,Switch} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    backgroundColor: 'white'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
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
              {
                name:'History',subCategory:['Ancient Civilization','Archaelogy','Freedom']
              },
            {name:'Biography',
          subCategory:['Autobiographies','History','Politics','World war','Women','Kings & rulrs','Composers','artists']},
          {name:'Social Sciences',
          subCategory:['Anthropology','Religion','Political Science','Psychology']},
        {name:'Text Books',
      subCategory:['History','Math','Geography','Psychology','Algebra','Education','Business','Science','English','Chemistry','Physics','Computer Science']},
    {name:'Books by Language',
  suCategory:['English','French','Spanish','German','Russian','Italian','Chinese','Japanese']}];


export default function SimpleAccordion() {
  const classes = useStyles();
  const [mainCategories, setMainCategories] = useState([]);

  const fetchData = () => {
      const mainCategoriesApiEndPoint = 'http://localhost:8050/categories'
      axios.get(mainCategoriesApiEndPoint)
      .then(response => response.data)
      .then((data) => {
          setMainCategories(data);
      })
      .then(() => {
        const col1 = [];
  for(var i = 0; i < Math.floor(mainCategories.length/3);i++){
    col1.push(mainCategories[i]);
 }
 const col2 = [];
 for(var i = Math.floor(mainCategories.length/3); i < 2*(Math.floor)(mainCategories.length/3);i++){
     col2.push(mainCategories[i]);
 }
 const col3 = [];
 for(var i = 2*(Math.floor)(mainCategories.length/3);i < mainCategories.length;i++){
    col3.push(mainCategories[i]);
 }
      })
  }
  useEffect(() => {
      fetchData()
  }, [])
function handleComponent(main,sub){
    return(
      <div>
    
      </div>
    )
}
  return (
    
      
    <div>
    <section id="accordion-section">
     <BrowserRouter>
        <Switch>
          <Route exact path="SubCategory/" component={SubCategory}/>
        </Switch>
      </BrowserRouter>
          {mainCategories.map((singleMain) => (
              <div>
                <Accordion classes = {{root:classes.root}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>{singleMain.category}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className = "accordion-subcategory-list">
                        {singleMain.subCategory.map((singleSub) => (
                            <div className = "single-accordion-div">
                                <li>
                                <Typography>
                                     {/* <NavLink exact activeClassName="current" to={`${singleMain.category}/${singleSub}/`} >{singleSub }</NavLink>  */}
                                     <NavLink exact activeClassName="current" to={`/SubCategory/${singleSub}/`}>{singleSub }</NavLink> 
                                </Typography>
                                </li>
                            </div>
                        ))}
                        
                    </ul>
                </AccordionDetails>
            </Accordion>
            
          </div>
          ))
          }

          </section>
    </div>
    
  );       
        
      
    

}