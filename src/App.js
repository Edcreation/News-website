import './App.css';
import react, { useState } from 'react';
import axios from 'axios';
import Register from './Users/Register';
import Login from './Users/Login';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [ name, setName] = useState("");


  async function register(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/reqister", {
        
      })
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <><Router>
            
  <nav class="menu">
      <div class="logo">News</div>
      <div class="links">
        <div class="link"><Link to="/Home" ><p>Home</p></Link></div>
        <div class="link"><Link to="/Home" ><p>Local</p></Link></div>
        <div class="link"><Link to="/Home" ><p>International</p></Link></div>
      </div>
      
    <div class="menu-list">
      <div class="menu__group"><Link to="/login" className="log" >Log In</Link></div>
      <div class="menu__group"><Link to="/register" className="reg" >Sign Up</Link></div>
    </div>
  </nav>
  <span>x</span>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
          <div className="App">
        <Register />
      </div>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </>
  );


  
}

export default App;
