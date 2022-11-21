import React from "react";
import './style.css';
import axios from "axios";
import { Router } from "react-router-dom";
const Homeview = () => {
        return <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet"></link> 
            <div class="background">
              <div class="hape"></div>
              <div class="hape"></div>
            </div>
        <form onSubmit={e => login(e)}>
            <h3>SIGN UP</h3>
            <label for="namw">Name</label>
            <input type="text" placeholder="Name" autoComplete="off" id="name"/>
             <label for="username">Email</label>
            <input type="email" placeholder="Email or Phone" autoComplete="none" id="email"/>

        <label for="password">Password</label>
        <input type="password" name="password" autoComplete="off" placeholder="Password" id="password"/>

        <button type="submit">Sign Up</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
        </div>
      }

      function login(e) {
        e.preventDefault();
        let req = {
          name : document.getElementById('name').value,
          email : document.getElementById('email').value,
          password : document.getElementById('password').value,
          headers: {
            accept: 'application/json',
          },
          data: {},
        }
        axios.post('http://localhost:3001/api/users/register', req)
        .then( resp => {
          alert("Registered!");
        })
        .catch(err => {
          console.log(err);
          alert("Something Went Wrong!!!");
        })
    
        
      }
export default Homeview;