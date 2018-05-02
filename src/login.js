import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {submit} from './store/action/action';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signIn} from './store/action/action';
const style = {
  margin: 12,
};



class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            password:"",
            email:"",
      
          }
    }
    formHandler(ev){
        this.setState({
          [ev.target.name]  : ev.target.value,
    
    })
}
    signIn(ev){
        ev.preventDefault();
        if(document.getElementById("password").value===""){
          alert("Please enter name first")
        }
        else if(document.getElementById("email").value===""){
          alert("Please enter Email first")
      
        }
        else{
        let data={
            password:this.state.password,
          email:this.state.email
        }
      
        this.props.signIn(data);
        this.props.history.push('/select')
      }
      
      }

    render(){
        return( <div className="App">
        <AppBar className="appbar"
   title="Welcome To Blood Bank"
   iconClassNameRight="muidocs-icon-navigation-expand-more"
 />
     <div className="mainStart">
     <form className="mainForm" onSubmit={this.signIn.bind(this)}>
 <div className="form-group">
   <label for="exampleInputName1">Email :</label>
   <TextField
     hintText="Enter Email"
      id="email"  name="email" type="email"  onChange={this.formHandler.bind(this)}/>
 </div>
 <div className="form-group">
   <label for="exampleInputEmail1">Password :</label>
   <TextField
     hintText="Enter Password"
      id="password"  name="password" type="password" onChange={this.formHandler.bind(this)}/>
 </div>
 <div className="form-check">
 </div>
 <RaisedButton label="Sign In" type="submit" primary={true} style={style}    />
</form>
  </div>
</div>)
    }
}


function mapStateToProp(state){
    console.log(state,'state')
    return({
        password: state.root.password,
        email: state.root.email,
    })
  }
  
  function mapDispatchToProp(dispatch){
    return({
        signIn:(data)=>dispatch(signIn(data))
    })
  }
  export default connect(mapStateToProp, mapDispatchToProp)(Login)  ;
