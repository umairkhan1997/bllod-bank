import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,Redirect ,Switch
  } from 'react-router-dom'   
import createBrowserHistory from 'history/createBrowserHistory'
import Main  from './main'
import App from './App'
import Login from './login'
import Select from './select'
import * as firebase from 'firebase'
import DonateForm from './donateForm'
// import { connect } from 'react-redux';


const customHistory=createBrowserHistory()


function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/select' />}
      />
    )
  }

 

class CustomRoutes extends Component{
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    // componentWillMount(){
      
    //  }
    // componentDidMount() {
    //     let that = this
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             that.setState({
    //                 authed: true
    //             })
    //         } else {
    //             that.setState({
    //                 authed: false
    //             })
    //         }
    //     });
    // }
    render(){
    return(

<Router history={customHistory}>
    
    <Switch>
        <PublicRoute authed={this.state.authed} exact path='/' component={App} />
        <PublicRoute authed={this.state.authed}  path='/login' component={Login} />
        <PrivateRoute  authed={this.state.authed} path="/select" component={Select} />
        {/* <Route  path='/select' component={Select} /> */}
        <PrivateRoute  authed={this.state.authed}  path='/donateForm' component={DonateForm} />
        <hr />
        </Switch>
  
    
</Router>
    )}
}


export default CustomRoutes;