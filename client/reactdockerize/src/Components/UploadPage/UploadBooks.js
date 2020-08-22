import React, {useState, useEffect}from 'react';
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
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Alert from '@material-ui/lab/Alert'
import GooglePicker from 'react-google-picker';

// import FormDialog from './Check'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '99%',
        alignItems:"center",
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    


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

export default function UploadBooks() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [setReason] = React.useState([]);
  const [bookname, setbookname]=React.useState(null)
  const [bookisbn, setbookisbn]=React.useState(null)
  const [bookimage, setbookimage]=React.useState(null)
  const [booklang, setbooklang]=React.useState(null)
  const [bookcat, setbookcat]=React.useState(null)
  const [bookauthor, setbookauthor]=React.useState(null)
   const [booksubcat, setbooksubcat]=React.useState([])
  const [bookdesc, setbookdesc]=React.useState(null)
  // const [bookformat, setbookformat]=React.useState({'Audio':'', 'PDF':''})
  const subcat=[]
  const[pdfurl, setpdfurl]=React.useState(null)
  const[audiourl, setaudiourl]=React.useState(null)
  const[allcategory, setallcategory]=React.useState([])
  const[allsubcategory, setallsubcategory]=React.useState([])

  const fetchData = () => {

    const uploadBookEndPoint = 'http://localhost:8050/api/v1/book/add'
    axios.post(uploadBookEndPoint,{
      "id":50,
      "name":bookname,
      "isbn":bookisbn,
      "author":bookauthor,
      "language":booklang,
      "bookImage":bookimage,
      "description":bookdesc,
      "views":20,
      "category":bookcat,
      "subCategory":booksubcat,
      "rating":4,
      "format":[{type:"Audio",url:audiourl},{type:"PDF", url:pdfurl}]
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      console.log(subcat)
    })

}

const fetchCategory = () => {

  const categoryEndPoint = 'http://localhost:8050/api/v1/category'
  axios.get(categoryEndPoint)
      .then(response => response.data)
      .then((data) => {
          console.log(data);
          setallcategory(data)
      })

}
useEffect(() => {
  fetchCategory()
},[])

const fetchSubCategory = (label) => {

  const subcategoryEndPoint = 'http://localhost:8050/api/v1/category/'+label+'/subcategory'
  axios.get(subcategoryEndPoint)
      .then(response => response.data)
      .then((data) => {
          console.log(data);
          setallsubcategory(data)
      })

}





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const handleChange = (event) => {
    setReason(event.target.value);
  };

  
  
  const [fileObjects, setFileObjects] = useState([]);

const handleBookname=(e)=>{
  console.log(e.target.value)
  setbookname(e.target.value)
}

const handleBookImage=(e)=>{
  console.log(e.target.value)
  setbookimage(e.target.value)
}

const handleBookisbn=(e)=>{
  console.log(e.target.value)
  setbookisbn(e.target.value)
}

const handleBooklang=(e)=>{
  console.log(e.target.value)
  setbooklang(e.target.value)
}

const handleBookdesc=(e)=>{
  console.log(e.target.value)
  setbookdesc(e.target.value)
}

const handleBookauthor=(e)=>{
  console.log(e.target.value)
  setbookauthor(e.target.value)
}

const handleCat=(label)=>{
console.log(label)
setbookcat(label)
fetchSubCategory(label)}

const handlesubCat=(label)=>{
console.log(label)
subcat.push(label)
setbooksubcat(subcat)
console.log(subcat)
// setbooksubcat(booksubcat.push(label))
// console.log(booksubcat)
}

const handlepdfurl=(e)=>{
  console.log(e.target.value)
  setpdfurl(e.target.value)
}

const handleaudiourl=(e)=>{
  console.log(e.target.value)
  setaudiourl(e.target.value)
}

const handleSubmit=()=>{
fetchData()
}
  

 

  return (
    <Container component="main" maxWidth="sm">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
     <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5">
         UPLOAD BOOK
        </Typography>
        <hr></hr>
          <Grid container spacing={3}>
              
            <Grid item xs={12}>
                
              <TextField
                autoComplete="fname"
                name="bookname"
                variant="outlined"
                required
                fullWidth
                id="bookName"
                label="Book Name"
                autoFocus
                color="secondary"
                onChange={handleBookname}
              />
            </Grid>
            <Grid item xs={12}>
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
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary">UPLOAD AUDIO</Button>
            <div className="google"></div>
        </GooglePicker>
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
                onChange={handleBookisbn}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bookLanguage"
                label="Book Language"
                name="bookLanguage"
                color="secondary"
                onChange={handleBooklang}
              />
            </Grid>
            
            
           
            <Grid>
            <FormControl component="fieldset">
            <Typography component="h3" variant="h6">CATEGORY
            <IconButton aria-label="add" onClick={handleClickOpen}>
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">ADD CATEGORY</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add the new category for the book 
           </DialogContentText>
           <TextField
            variant="outlined"
            required
            fullWidth
            id="bookCategory"
            label="Book Category"
            name="bookCategory"
            color="secondary"
          /></DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
            </Typography>

            

            <hr></hr>
            
      <FormGroup aria-label="position" row>
       { allcategory.map((singlecategory)=>(
         <div>
         <FormControlLabel 
         value={singlecategory}
         label={singlecategory}
         control={<Checkbox color='secondary'/>}
         onClick={()=>handleCat(singlecategory)}
         >

         </FormControlLabel>
        </div>
       ))}
      
        
      </FormGroup>
    </FormControl>
            </Grid>
            <FormControl component="fieldset">
      <Typography component="h3" variant="h6">SUBCATEGORY
      <IconButton aria-label="add category"onClick={handleClickOpen}>
        <AddCircleRoundedIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">ADD SUBCATEGORY</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add the new  sub category for the book 
           </DialogContentText>
           <TextField
            variant="outlined"
            required
            fullWidth
            id="bookSubcategory"
            label="Book Subcategory"
            name="bookSubcategory"
            color="secondary"
          /></DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </Typography>
      <hr></hr>
      <FormGroup aria-label="position" row>
        {allsubcategory.map((single)=>
        <div>
          <FormControlLabel
          value={single}
          label={single}
          control={<Checkbox color='secondary'/>}
          onClick={()=>handlesubCat(single)}>

          </FormControlLabel>
        </div>)}
      
        
        
        
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
                onClick={handleBookdesc}
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
                onChange={handleBookauthor}
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
<Grid item xs={12}>
<GooglePicker clientId='893697397832-rmd2ealbrornn8699moclc58fdd55pup.apps.googleusercontent.com'
              developerKey='AIzaSyBlN1rHsjcxi2gz5ZPfDg8zLa-B96IEYuY'
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              viewId={'DOCS'}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView()
                .setParent("163znjtImSL_6eih-mtGOmoSo8Gv777p6");
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
                          setbookimage("https://drive.google.com/uc?export=view&id="+fileId)
                          console.log(bookimage)
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary">UPLOAD PDF</Button>
            <div className="google"></div>
        </GooglePicker>
            </Grid>
<div>
<div className={classes.root}>
<Alert variant="outlined" severity="info" color="error">pdf format only</Alert>
 </div>
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
                <Grid item xs={12}>
                <GooglePicker clientId='893697397832-rmd2ealbrornn8699moclc58fdd55pup.apps.googleusercontent.com'
              developerKey='AIzaSyBlN1rHsjcxi2gz5ZPfDg8zLa-B96IEYuY'
              scope={['https://www.googleapis.com/auth/drive']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
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
                        //   picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button variant="contained" color="secondary">UPLOAD AUDIO</Button>
            <div className="google"></div>
        </GooglePicker>
            </Grid>
<div>
<div className={classes.root}>
<Alert variant="outlined" severity="info" color="error">mp3 format only</Alert>
</div>
</div>
</div>
</Grid>

<div className={classes.root}>
<Alert variant="outlined" severity="info" color="error">max 15 mb only</Alert>
</div>
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            UPLOAD
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              
            </Grid>
          </Grid>
          </Grid> 
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container>
  );
          }
