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
                        subCategory:['History','Paintings']},
                        {name:'Education',
                        subCategory:["Science", "Math"]}];


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
  }
  useEffect(() => {
      fetchData()
  }, [])

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