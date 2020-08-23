import React, {useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function EditSearch() {
  const classes = useStyles();
  const[books, setBooks]=React.useState([])
  const[input, setinput]=React.useState()

  const updateState=(event)=>{
    console.log(event)
  }

  const fetchData = () => {

    const editsearchapi = 'http://localhost:8050/api/v1/books'
    // const userEndPoint = "http://localhost:8050/api/v1/user/"+id
    // const finishedBooksEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/finishedbooks'

    // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
    axios.get(editsearchapi)
    .then(response => response.data)
    .then((data) => {
        console.log(data);
        setBooks(data)
    })

   
}
// const fetchboks = () => {

//   const editsearchapi = 'http://localhost:8050/api/v1/books'
//   // const userEndPoint = "http://localhost:8050/api/v1/user/"+id
//   // const finishedBooksEndPoint = 'http://localhost:8050/api/v1/user/'+id+'/finishedbooks'

//   // const userSavedBooksApiEndPoint = "static/recentlyAddedHome.json"
//   axios.get(editsearchapi)
//   .then(response => response.data)
//   .then((data) => {
//       console.log(data);
//       setBooks(data)
//   })

 
// }

useEffect(() => {
  fetchData()
},[])




  return (
    <Autocomplete
      id="combo-box-demo"
      options={books}
      getOptionLabel={(option) => option.name }
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Book by Name" variant="outlined" />}
      onChange={(event, newValue) => {
        setinput(newValue);
        console.log(newValue)
        // fetchbook(newValue)
      }}
      
    />
  );
}
