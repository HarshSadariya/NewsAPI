import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News.js';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://wallpaperaccess.com/full/1314202.jpg")` 
      }}>
        <BrowserRouter>
        <Navbar/>

         <Routes>  
         <Route path="/"element = {<News key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/general"element = {<News key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/business"element = {<News key="Business"   pageSize={this.pageSize} country="in" category="Business"/>}/>
          <Route path="/entertainment"element = {<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
          <Route path="/health"element = {<News key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
          <Route path="/science"element = {<News key="Science"  pageSize={this.pageSize} country="in" category="Science"/>}/>
          <Route path="/sports"element = {<News key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}/>
          <Route path="/technology"element = {<News key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
         </Routes>
         </BrowserRouter>
      </div>
      
    )
  }
}

  

