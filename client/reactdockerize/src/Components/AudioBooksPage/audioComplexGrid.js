import React from "react"


function audioComplexGrid(){
  




  return (
    <div>{console.log("Hi from grid")}<h1> Hi from audio complex grid</h1></div>
  )

}


export default audioComplexGrid;

{/* <Paper className={classes.paper}>
<Grid container spacing={2}>
  <Grid item>
    <ButtonBase className={classes.image}>
      <img className={classes.img} alt="Bookimage" src={book.bookImage} />
    </ButtonBase>
  </Grid>
  <Grid item xs={8} sm container>
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs>
        <Typography gutterBottom variant="subtitle2">
        <h4>{book.name}</h4>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <h5>{book.author}</h5>
        </Typography>
    </Grid>
    </Grid>
    </Grid>
    <Grid container wrap="nowrap" spacing={2} xs={8} sm  >
  <Grid item xs>
    <Typography  gutterBottom variant="body1">{book.description}</Typography>
  </Grid>
</Grid>
<Grid item xs={8} sm container>
    <Grid item xs container direction="row" spacing={2}>

    <Grid item xs={4}>
        <div>
            {/* <PictureAsPdfIcon fontSize="large"></PictureAsPdfIcon>
            <Typography variant="subtitle2">Read</Typography> */}
//             {book.format[1].url != null ? <IconButton  aria-label="read pdf book"   onClick={() => handlePdf({book})}>
//   <PictureAsPdfIcon fontSize="large"/>
// </IconButton> : null }

//         </div>
//     </Grid>
//      <Grid item xs={4}>
//           <div>
//   {book.format[0].url != null ? <IconButton aria-label="listen to audio book"   onClick={() => handleAudio({book})}>
//   <HeadsetIcon fontSize="large"/>
// </IconButton> : null }
//          </div>
//      </Grid>
//      <Grid item xs={4}>
//          <div>
//            <IconButton aria-label="save the book">
//            {saved?  <BookmarkOutlinedIcon  onClick={() => handleUnsave({book})} fontSize="large" /> :  <BookmarkBorderOutlinedIcon  onClick={() => handleSave({book})} fontSize="large" />}
//       </IconButton>
//      </div>
//     </Grid>
//     <Grid item xs={2} sm >
//      <div>
//      {/* <Rating name="size-large" defaultValue={book.rating} size="large" readOnly /> */}
//     </div>
//   </Grid>
//     </Grid>
//     </Grid>
// </Grid>

// </Paper> */}