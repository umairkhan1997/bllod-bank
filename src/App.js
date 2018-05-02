import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { submit } from './store/action/action';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import firebase from 'firebase';
import FacebookLogin from 'react-facebook-login'
import createBrowserHistory from 'history/createBrowserHistory'
import {facebookSignin} from './store/action/action'

const responseFacebook = (response) => {

  console.log(response);
  // this.props.history.push('/select');
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: "",


    }

  }
  formhandler(ev, key, v) {
    console.log(v)

    this.setState({
      // bloodG:key+1,
      [ev.target.name]: ev.target.value,
    })
    console.log(ev.target.value);
  }


  signup() {
    if (document.getElementById("userName").value === "") {
      alert("Enter Name First");
    }
    else if (document.getElementById("email").value === "") {
      alert("Enter email First");
    }
    else if (document.getElementById("password").value === "") {
      alert("Enter Password First");
    }
    // else if(document.getElementById("dropdownMenuButton").value===""){
    //   alert("Select Blood Group Please");
    // }
    else {
      let data = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,

      }

      this.props.submit(data)
      this.setState({
        userName: "",
        email: "",
        password: "",

      })
      this.props.history.push('/login')
    }

  }
  singin() {
    this.props.history.push('/login');
  }

  facebookSignin(){
    this.props.facebookSignin();
  }
  // onClick={() => {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase.auth().signInWithPopup(provider).then(function (result) {

  //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //     var token = result.credential.accessToken;
  //     // The signed-in user info.
  //     var user = result.user;
  //     console.log(user);
  //      this.props.history.push('/select')
  //     // ...
  //   }).catch(function (error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //   });
  // }}
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" >Blood Bank App</a>
          <button onClick={this.facebookSignin.bind(this)}>Facebook</button>
          {/* <FacebookLogin
            appId="164036437604576"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook" /> */}
        </nav>
        <div className="mainSignup">
          <div className="signuphead" >
            <h3>Signup</h3>
            <p> Be a part of Blood Bank </p>
            {/* <span className="glyphicon glyphicon-pencil"></span>  */}
          </div>
          <div className="signUpForm">
            <div>
              <p>Username : </p>
              <input type="text" className="form-control inputs" name="userName" id="userName" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.formhandler.bind(this)} />
            </div>
            <div>
              {/* <p>Blood Group : </p> */}
              {/* <input type="email" className="form-control inputs" name="email" id="email"placeholder="email" aria-label="Username" aria-describedby="basic-addon1" onChange={this.formhandler.bind(this)}/> */}
              {/* <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" 
  id="dropdownMenuButton" data-toggle="dropdown" value={this.state.bloodG} onChange={this.formhandler.bind(this)}
  aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" name="bloodG" aria-labelledby="dropdownMenuButton" value={this.state.bloodG} onChange={this.formhandler.bind(this)}>
    <a className="dropdown-item" value={"A+"} >A+</a>
    <a className="dropdown-item" value={"B+"} >B+</a>
    <a className="dropdown-item" value={"AB+"} >AB+</a>
    <a className="dropdown-item" value={"A-"} >A-</a>
    <a className="dropdown-item" value={"B-"} >B-</a>
    <a className="dropdown-item" value={"AB-"} >AB-</a>
    <a className="dropdown-item" value={"O+"} >O+</a>
    <a className="dropdown-item" value={"O-"} >O-</a>
  </div>
  
</div> */}
              {/* <DropDownMenu value={this.state.bloodG} name="bloodG" onChange={this.formhandler.bind(this)} ref="bloodG"  style={{width: 200}} required="required">
          <MenuItem value={1} primaryText="Blood Group" disabled />
          <MenuItem value={2} primaryText="A+" />
          <MenuItem value={3} primaryText="B+" />
          <MenuItem value={4} primaryText="AB+" />
          <MenuItem value={5} primaryText="O+" />
          <MenuItem value={6} primaryText="O-" />
          <MenuItem value={7} primaryText="AB-" />
          <MenuItem value={8} primaryText="B-" />
          <MenuItem value={9} primaryText="A-" />
        </DropDownMenu>  */}
              {/* <SelectField
          floatingLabelText="Frequency"
          value={this.state.bloodG} name="bloodG" 
          onChange={this.formhandler.bind(this)}
        >
          <MenuItem value="A" primaryText="A" />
          <MenuItem value="B" primaryText="Every Night" />
          <MenuItem value="c" primaryText="Weeknights" />
          <MenuItem value="D" primaryText="Weekends" />
          <MenuItem value="E" primaryText="Weekly" />
        </SelectField> */}
            </div>
            <div>
              <p>Email : </p>
              <input type="email" className="form-control inputs" name="email" id="email" placeholder="email" aria-label="Username" aria-describedby="basic-addon1" onChange={this.formhandler.bind(this)} />
            </div>
            <div>
              <p>Password : </p>
              <input type="password" className="form-control inputs" name="password" id="password" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={this.formhandler.bind(this)} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={this.signup.bind(this)}>Sign Up</button>
            <button type="button" className="btn btn-danger" onClick={this.singin.bind(this)}>Already Sign Up</button>
          </div>

        </div>
      </div>



    );
  }
}
function mapStateToProp(state) {
  console.log(state, 'state')
  return ({
    userName: state.root.userName,
    data: state.root.data,
  })
}

function mapDispatchToProp(dispatch) {
  return ({
    submit: (data) => dispatch(submit(data)),
    facebookSignin:()=>dispatch(facebookSignin()),
  })
}
export default connect(mapStateToProp, mapDispatchToProp)(App);
