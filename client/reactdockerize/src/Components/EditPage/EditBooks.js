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
// import { DropzoneDialog } from 'material-ui-dropzone';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert'
import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import GooglePicker from 'react-google-picker';



// const reason = [
//     {
//       value: '1',
//       label: 'Copyright issues',
//     },
//     {
//       value: '2',
//       label: 'Book not found',
//     },
    
//   ];






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

  
  
  const [fileObjects, setFileObjects] = React.useState([]);

  

  

 

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
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
            {/* <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     Image File
  </Button> */}
<div>
<GooglePicker clientId='893697397832-rmd2ealbrornn8699moclc58fdd55pup.apps.googleusercontent.com'
              developerKey='AIzaSyBlN1rHsjcxi2gz5ZPfDg8zLa-B96IEYuY'
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={true}
              viewId={'DOCS'}
              mimeTypes={['application/pdf']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView()
                .setParent("1hu0Sx7vqfkb71yQdSxHGRuXC0rNI8KPC");;
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);
                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .addView(docsView)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey('AIzaSyAt0xkbUJKMFTa4oNfx6jCZlXZHX99mTnY')
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                        //   alert('The user selected: ' + fileId);
                          console.log(fileId)
                          //  headerimage+= fileId
                          // setbookimage(data.docs[0].id)
                          console.log("bookimage")
                          // console.log(bookimage)
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary" >UPLOAD BOOK IMAGE</Button>
            <div className="google"></div>
        </GooglePicker>
  
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
  {/* <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     PDF File
  </Button> */}
<div>
<GooglePicker clientId='893697397832-rmd2ealbrornn8699moclc58fdd55pup.apps.googleusercontent.com'
              developerKey='AIzaSyBlN1rHsjcxi2gz5ZPfDg8zLa-B96IEYuY'
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={true}
              viewId={'DOCS'}
              mimeTypes={['application/pdf']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView()
                .setParent("1hu0Sx7vqfkb71yQdSxHGRuXC0rNI8KPC");;
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);
                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .addView(docsView)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey('AIzaSyAt0xkbUJKMFTa4oNfx6jCZlXZHX99mTnY')
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                        //   alert('The user selected: ' + fileId);
                          console.log(fileId)
                          //  headerimage+= fileId
                          // setbookimage(data.docs[0].id)
                          console.log("pdf")
                          // console.log(bookimage)
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary" >PDF FILE</Button>
            <div className="google"></div>
        </GooglePicker>
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
  {/* <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>
     Audio File
  </Button> */}
<div>
<GooglePicker clientId='893697397832-rmd2ealbrornn8699moclc58fdd55pup.apps.googleusercontent.com'
              developerKey='AIzaSyBlN1rHsjcxi2gz5ZPfDg8zLa-B96IEYuY'
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={true}
              viewId={'DOCS'}
              mimeTypes={['application/pdf']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView()
                .setParent("1hu0Sx7vqfkb71yQdSxHGRuXC0rNI8KPC");;
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);
                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .addView(docsView)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey('AIzaSyAt0xkbUJKMFTa4oNfx6jCZlXZHX99mTnY')
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                        //   alert('The user selected: ' + fileId);
                          console.log(fileId)
                          //  headerimage+= fileId
                          // setbookimage(data.docs[0].id)
                          console.log("audio")
                          // console.log(bookimage)
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary" >AUDIO FILE</Button>
            <div className="google"></div>
        </GooglePicker>
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