import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Books from './Pages/Books'
import AudioBooks from './Pages/AudioBooks'
import SavedBooks from './Pages/SavedBooks'
import SignIn from './Pages/SignIn'
import Donate from './Pages/Donate'
import './App.css'
import '../src/Components/Footer.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/PDFBooks" component={Books}/>
          <Route path="/AudioBooks" component={AudioBooks}/>
          <Route path="/Saved" component={SavedBooks}/>
          <Route path="/Donate" component={Donate}/>
          <Route path="/SignIn" component={SignIn}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;