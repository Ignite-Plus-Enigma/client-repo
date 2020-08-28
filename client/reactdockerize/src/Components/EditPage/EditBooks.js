import React, {useState, useEffect}from 'react';
import Button from '@material-ui/core/Button';
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
import GooglePicker from 'react-google-picker';
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';



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

export default function EditBooks() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
const [setReason] = React.useState([]);
const[books, setBooks]=React.useState([])
  const[input, setinput]=React.useState()
  const[searchbook, setsearchbook]=React.useState()
  const[bookname, setbookname]=React.useState("Book Name")
  const[bookdesc, setbookdesc]=React.useState("Book Description")
  const[bookauthor, setbookauthor]=React.useState("Book Author")
  const[bookisbn, setbookisbn]=React.useState("Book ISBN")
  const[newcat, setnewcat]=React.useState()
  const[newsubcat, setnewsubcat]=React.useState([])
  const[openSubCat, setOpenSubCat]=React.useState(false)
  const[id, setid]=React.useState()
  const[openCategory, setOpenCategory]=React.useState()
  const [bookcat, setbookcat]=React.useState([])
  const [booksubcat, setbooksubcat]=React.useState([])
  const[flag, setflag]=React.useState(true)
  const subcat=[]
  const[allcategory, setallcategory]=React.useState([])
  const getbookcat=[]
  const[allsubcategory, setallsubcategory]=React.useState([])
  const[imageurl, setimageurl]=React.useState()
  const[pdf, setpdf]=React.useState()
  const[audio, setaudio]=React.useState()




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

  const fetchData = () => {

    const editsearchapi = 'http://localhost:8050/api/v1/books'
        axios.get(editsearchapi)
    .then(response => response.data)
    .then((data) => {
        console.log(data);
        setBooks(data)
    })

   
}
const fetchbooks = (newValue) => {
  
setbookname(newValue.name)
setbookisbn(newValue.isbn)
setbookauthor(newValue.author)
setbookdesc(newValue.description)
setid(newValue.id)
setallcategory(newValue.category)
console.log(newValue.format)
console.log(newValue.bookImage)
setimageurl(newValue.bookImage)
setpdf(newValue.format[1].url)
setaudio(newValue.format[0].url)
 
}

useEffect(() => {
  fetchData()
},[])

const handlebookname=(e)=>{
  setbookname(e.target.value)
}

const handlebookisbn=(e)=>{
  setbookisbn(e.target.value)
}

const handlebookauthor=(e)=>{
  setbookauthor(e.target.value)
}
const handlebookdesc=(e)=>{
  setbookdesc(e.target.value)
}

const handleClickOpenCategory = () => {
  setOpenCategory(true);
};

const handleCloseCategory = () => {
  setOpenCategory(false);
};

const handleClickOpenSubCategory = () => {
  setOpenSubCat(true);
};

const handleCloseSubCategory = () => {
  setOpenSubCat(false);
};

const handlesubmit=()=>{
  console.log(bookname)
  console.log(bookisbn)
  console.log(bookauthor)
  console.log(bookdesc)
  const editbookendpoint='http://localhost:8050/api/v1/editbook/'+id
  console.log(editbookendpoint)
  axios.put(editbookendpoint,{
    "id":id,
    "name":bookname,
    "isbn":bookisbn,
    "author":bookauthor,
    "description":bookdesc,
    "category":bookcat,
    "subCategory":subcat,
    "bookImage":"https://drive.google.com/uc?export=view&id="+imageurl,
    "format":[{
      "type":"Audio","url":"https://drive.google.com/uc?export=view&id="+audio},
      {"type":"PDF", "url":"https://drive.google.com/uc?export=view&id="+pdf,
    }]


  })
}

const fetchCategory = () => {
  handlebookimageflag()
    const categoryEndPoint = 'http://localhost:8050/api/v1/category'
    axios.get(categoryEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            setallcategory(data)
        })
  
  }

  const fetchSubCategory = (label) => {

    const subcategoryEndPoint = 'http://localhost:8050/api/v1/category/'+label+'/subcategory'
    axios.get(subcategoryEndPoint)
        .then(response => response.data)
        .then((data) => {
            console.log(data);
            setallsubcategory(data)
        })
  
  }


const handleCat=(label)=>{
  getbookcat.push(label)
  
console.log(label)

setbookcat(getbookcat)
fetchSubCategory(label)}

const handlesubCat=(label)=>{
console.log(label)
subcat.push(label)
setbooksubcat(subcat)
console.log(subcat)
}

const handlebookimageflag=()=>{
  setflag(false)
}

const handlenewcat=(e)=>{
  console.log(e.target.value)
  setnewcat(e.target.value)
}

const handlenewsubcat=(e)=>{
  console.log(e.target.value)
  subcat.push(e.target.value)
  setnewsubcat(subcat)
}
  
  
  const [fileObjects, setFileObjects] = React.useState([]);

  

  

 

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
      <Autocomplete
      id="combo-box-demo"
      options={books}
      getOptionLabel={(option) => option.name }
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search Book by Name" variant="outlined" />}
      onChange={(event, newValue) => {
        setinput(newValue);
        console.log(newValue)
        fetchbooks(newValue)
      }}
      
    />
        
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
                id="book check"
                label={bookname}
                autoFocus
                color="secondary"
                onChange={handlebookname}
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
              mimeTypes={['image/png,image/jpeg,image/jpg']}
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
                          setimageurl(data.docs[0].id)
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
                label={bookisbn}
                name="isbn"
                color="secondary"
                onChange={handlebookisbn}
              />
            </Grid>
            
            
          
            <Grid item xs={12}>
                
            </Grid>
            <Grid>
            <FormControl component="fieldset">
            <Typography component="h3" variant="h6">CATEGORY
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
                label={bookdesc}
                autoFocus
                multiline
                rows={7}
                color="secondary"
                onChange={handlebookdesc}
              />
            </Grid>
            <Grid item xs={12}>
           
              <TextField
                variant="outlined"
                required
                fullWidth
                id="author"
                label={bookauthor}
                name="author"
                autoComplete="author"
                color="secondary"
                onChange={handlebookauthor}
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
                          setpdf(data.docs[0].id)
                          console.log("pdf")
                          console.log(pdf)
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
              mimeTypes={['image/jpeg']}
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
            

            </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handlesubmit}
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
