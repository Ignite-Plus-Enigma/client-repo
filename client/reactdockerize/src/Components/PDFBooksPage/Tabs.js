import React ,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    subcategoryTab:{
      margin:0,
      padding:0,
      color:"black"
    }
  },
}));



export default function Tabs(props) {
  const classes = useStyles();
  const [mainCategories, setMainCategories] = useState([]);
  const keyforEndPoint =props.mainCat;
 const history = useHistory();
 const [active,setActive]=useState(null)



  const fetchData = ()  => {
    const mainCategoriesApiEndPoint = 'http://localhost:8050/api/v1/category/'+keyforEndPoint+'/subcategory'

    const response =  axios.get(mainCategoriesApiEndPoint)
    .then(response => response.data)
    .then((data) => {
        setMainCategories(data);
    })
  }
  useEffect(() => {
      fetchData()
  },[])

  
  
  function handleClick(singleSub){
    var a = singleSub.singleSub
    setActive(a)
    history.push(`/PDFSubCategory/Text%20Books/${singleSub.singleSub}/`)
      window.location.reload()
  }

  return (
    
     <div className={classes.root}>
        {mainCategories.map(singleSub=>(
            singleSub==props.subCat ? 
            <Button color="secondary" onClick={() => handleClick({singleSub})} className={classes.subcategoryTab} activeClassName="current">{singleSub}</Button>:
            <Button color="primary" onClick={() => handleClick({singleSub})} className={classes.subcategoryTab} activeClassName="current">{singleSub}</Button>
        
        ))}
     
     </div>
  );
}