import React, { Component } from 'react';
import Navbar from './Components/NavbarComponent/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/HomePage/Browse'
import Books from './Components/PDFBooksPage/Books'
import AudioBooks from './Components/AudioBooksPage/AudioBooks'
import SavedBooks from './Components/SavedBooksPage/SavedBooks'
import SignIn from './Components/SignInPage/SignIn'
import Donate from './Components/DonatePage/Donate'
import './App.css'
import '../src/Components/FooterComponent/Footer.css'
import SubCategory from "./Components/PDFBooksPage/SubCategory"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/PDFBooks" component={Books}/>
          <Route path="/AudioBooks" component={Books}/>
          <Route path="/Saved" component={SavedBooks}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/SubCategory" component={SubCategory}/>
          <Route path="/Audio/:id" component={Audio}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;