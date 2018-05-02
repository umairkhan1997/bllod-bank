import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App'
import {Provider} from 'react-redux';
import store from './store';
import Route from './Route'
import firebase from 'firebase';


class Main extends Component{
    constructor(props){
        super(props)

    }
   
    render(){
        return(
            
  <Provider store={store}>
        <Route />
        
      </Provider>
            
        )
    }
}

export default Main;