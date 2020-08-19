import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 300,
    height: 35,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
  },
  
}));

export default function CustomizedInputBase() {
  const [key,setKey] = useState()
  const classes = useStyles();

  function hanldeChange(event){
  setKey(event.target.value)
  }

  function handleSubmit(event){
    // event.preventDefault();
  
    console.log("The kye searched for is")
    console.log(key)
  }

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search for Book or Author' }}
        onChange={hanldeChange}
      />
      <IconButton  className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
      {console.log(key)}
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}
