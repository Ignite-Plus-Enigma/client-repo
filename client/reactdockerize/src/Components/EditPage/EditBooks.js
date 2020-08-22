import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Search from './Search'
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { DropzoneDialog } from 'material-ui-dropzone';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert'

// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
// import FormDialog from './Check'

// const fs = require("fs");
// const express = require("express");
// const multer = require("multer");
// const OAuth2Data = require("./credentials.json");
// var name,pic

// const { google } = require("googleapis");

// const app = express();


// const CLIENT_ID = OAuth2Data.web.client_id;
// const CLIENT_SECRET = OAuth2Data.web.client_secret;
// const REDIRECT_URL = OAuth2Data.web.redirect_uris[9];

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URL
// );
// var authed = false;

// // If modifying these scopes, delete token.json.
// const SCOPES =
//   "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.profile";


const reason = [
    {
      value: '1',
      label: 'Copyright issues',
    },
    {
      value: '2',
      label: 'Book not found',
    },
    
  ];






const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditBooks() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const [setReason] = React.useState([]);

const reason = [
    {
      value: '1',
      label: 'Copyright issues',
    },
    {
      value: '2',
      label: 'Book not found',
    },
    
  ];

const handleChange = (event) => {
    setReason(event.target.value);
  };

  
  
  const [fileObjects, setFileObjects] = useState([]);

  

  

 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Search/>
        
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5">
         EDIT BOOK DETAILS
        </Typography>
        <hr></hr>
          <Grid container spacing={3}>
              
            <Grid item xs={12}>
                
              <TextField
                autoComplete="fname"
                name="bookName"
                variant="outlined"
                required
                fullWidth
                id="bookName"
                label="Book Name"
                autoFocus
                color="secondary"
              />
            </Grid>
            <hr></hr>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography component="h1" variant="h5" >
                  UPLOAD BOOK IMAGE
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     Image File
  </Button>
<div>
<DropzoneDialog
    acceptedFiles={['image/*']}
    cancelButtonText={"cancel"}
    submitButtonText={"submit"}
    maxFileSize={5000000}
    open={open}
    onClose={() => setOpen(false)}
    onSave={(files) => {
      console.log('Files:', files);
      setOpen(false);
    }}
    showPreviews={true}
    showFileNamesInPreview={true}
    
  />
  
</div>
            </Grid>
            
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="isbn"
                label="ISBN"
                name="isbn"
                color="secondary"
              />
            </Grid>
            
            
            <hr></hr>
            <Grid item xs={5}>
                
            </Grid>
            <Grid>
            <FormControl component="fieldset">
            <Typography component="h3" variant="h6">CATEGORY
            <IconButton aria-label="add">
        <AddCircleRoundedIcon />
      </IconButton>
      
            </Typography>
            

            <hr></hr>
            
      <FormGroup aria-label="position" row>
      <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Children"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="TextBooks"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Social Studies"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Fiction"
          labelPlacement="category"
        />
      </FormGroup>
    </FormControl>
            </Grid>
            <FormControl component="fieldset">
      <Typography component="h3" variant="h6">SUBCATEGORY
      <IconButton aria-label="add category">
        <AddCircleRoundedIcon />
      </IconButton></Typography>
      <hr></hr>
      <FormGroup aria-label="position" row>
      <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Children"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="TextBooks"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Social Studies"
          labelPlacement="category"
        />
        <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Fiction"
          labelPlacement="category"
        />
      </FormGroup>
    </FormControl>
          
          <Grid item xs={12}>
                
              <TextField
                autoComplete="description"
                name="description"
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                autoFocus
                multiline
                rows={7}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
           
              <TextField
                variant="outlined"
                required
                fullWidth
                id="author"
                label="Author"
                name="author"
                autoComplete="author"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
            <Typography component="h3" variant="h6">FORMAT</Typography>
            <hr></hr>
            <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="PDF"
          labelPlacement="category"
        />
            </Grid>
            
            <Grid item xs={12} sm={6}>
                <Typography component="h3" variant="h6">CHOOSE FILE</Typography>
                <hr></hr>
                <div>
  <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     PDF File
  </Button>
<div>
<DropzoneDialog
    acceptedFiles={['application/pdf']}
    cancelButtonText={"cancel"}
    submitButtonText={"submit"}
    maxFileSize={5000000}
    open={open}
    onClose={() => setOpen(false)}
    onSave={(files) => {
      console.log('Files:', files);
      setOpen(false);
    }}
    showPreviews={true}
    showFileNamesInPreview={true}
  />
</div>
</div>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Audio"
          labelPlacement="category"
        />
            </Grid>

            <Grid item xs={12} sm={6}>
                
                <div>
  <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     Audio File
  </Button>
<div>
<DropzoneDialog
    acceptedFiles={['audio/mpeg']}
    cancelButtonText={"cancel"}
    submitButtonText={"submit"}
    maxFileSize={15000000}
    open={open}
    onClose={() => setOpen(false)}
    onSave={(files) => {
      console.log('Files:', files);
      setOpen(false);
    }}
    showPreviews={true}
    showFileNamesInPreview={true}
  />
</div>
</div>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography component="h3" variant="h6">DISABLE FORMAT</Typography>
            <hr></hr>
            <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="PDF"
          labelPlacement="category"
        />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography component="h3" variant="h6">REASON</Typography>
                <hr></hr>
            
                
            <TextField
          id="outlined-select-reason"
          select
          label="Select"
          value={reason}
          onChange={handleChange}
          helperText="Select appropriate reason"
          variant="outlined"
        >
          {reason.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControlLabel
          value="category"
          control={<Checkbox color="secondary" />}
          label="Audio"
          labelPlacement="category"
        />
            </Grid>

            <Grid item xs={12} sm={6}>
                
            
                
            <TextField
          id="outlined-select-reason"
          select
          label="Select"
          value={reason}
          onChange={handleChange}
          helperText="Select appropriate reason"
          variant="outlined"
        >
          {reason.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>
           
            

            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            SAVE CHANGES
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
}