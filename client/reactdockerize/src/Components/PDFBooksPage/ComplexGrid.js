// import React,{useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import HeadsetIcon from '@material-ui/icons/Headset';
// import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// import Rating from '@material-ui/lab/Rating';
// // import image from './digital-library-photo.jpg';
// import axios from "axios"





// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     fontSize:65,
    
//     flexDirection: 'column',
//     '& > * + *': {
//       marginTop: theme.spacing(1),
//     },   
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth:1000,
//     height:100,
//   },
//   image: {
//     width: 130,
//     height: 110,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid(props) {
//   const classes = useStyles();
//   const [books,setBooks] = useState([])


//   const fetchdata = () =>{
//     {
//         const path=this.props.location.pathname;
//         const subCat=path.split("/")[3]
//         let apiSearchEndpoint = 'http://localhost:8050/api/v1/books/subcategory/'+subCat;
//         axios.get(apiSearchEndpoint)
//             .then(response =>response.data)
//             .then((data)=>{
//                 setBooks(data);
                   
//             })
//           }
//         }

//   return (
   
//     <div className={classes.root}>
//     {console.log(props.id)}
       
//     <ul classname="subcategorylist">
//         {books.map((book)=>(
//             <div>
//                 <li>
//       <Paper className={classes.paper}>
//         <Grid container spacing={4}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="Bookimage" src={book.book_image} />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={8} sm container>
//             <Grid item xs container direction="column" spacing={1}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                 <h2>{book.name}</h2>
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   <h3>{book.author}</h3>
//                 </Typography>
//             </Grid>
//             </Grid>
//             <Grid item xs={4} sm >
            
//               <div>
                
//               <Rating name="size-large" defaultValue={1} size="large" readOnly />
//              { /*<Typography variant="subtitle2" >pages</Typography>*/}
//               </div>
//             </Grid>
//             <Grid item xs={2}>
//                 <div>
//                     <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
//                     <Typography variant="subtitle2">Read</Typography>
//                 </div>
//             </Grid>
//              <Grid item xs={2}>
//                   <div>
//                   <HeadsetIcon fontSize="large"></HeadsetIcon>
//                   <Typography variant="subtitle2">Listen</Typography>
//                  </div>
//              </Grid>
            
//              <Grid item xs={1} >
//                  <div>
//               <BookmarkBorderIcon fontSize="large" ></BookmarkBorderIcon>
//               <Typography variant="subtitle2">Save</Typography>
//               </div>
//             </Grid>
//           </Grid>
//         </Grid>
        
//       </Paper>
//       </li>
      
//       </div>
//         ))}
       
// </ul>
//     </div>
        
//   );
  
// }