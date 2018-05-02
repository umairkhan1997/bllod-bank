import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui"
// import Design from "./AppBarDesign"
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import firebase from 'firebase';
import { requestBlood } from './store/action/action';
import { SignOut } from './store/action/action';
import RaisedButton from 'material-ui/RaisedButton';

const styless = {
    margin: 12,
  };

const style = {
    color: "#D50000",
    textAlign: 'center',
    display: 'inline-block',
    marginLeft: "600px",
};

const styleOne = {
    width: "130px",
    margin: "auto 0 auto 0",
    marginTop: "50px",
    marginLeft: "600px",
}


class Select extends Component {
    constructor(props){
      super(props)
        this.state = {
            value: 2,
            bloodName: "",
            detail: [],
        }
        this.setState({
            detail:this.props.bloodDonors
        })
        console.log(this.state.detail,"3999")
    }
    handleBgroup(e, key) {
        // e.preventDefault();
        console.log(e,key)
        // var don = [];
        this.setState({ value: 1 + key });
        var blood = e.target.childNodes[0].nodeValue;
        console.log(blood);
        this.setState({
            bloodName: this.state.bloodName


        })
        this.props.requestBlood(blood);
    }
    // componentWillReceiveProps(nextProps,nextState) {
    //     // console.log(nextState.detail)
    //     this.setState({
    //         detail: nextProps.bloodDonors   
    //     })
    //     console.log(nextProps.bloodDonors);
    // }
    componentWillReceiveProps(nextProps){
       console.log(nextProps.bloodDonors);
       this.setState({
           detail:nextProps.bloodDonors
       })
    }
    signOut(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
          this.props.history.push('/');
      
    }
    //   componentDidMount() {
    //     //   componentWillUpdate(){
    //       console.log("hi");
    //     let bloodNames = this.state.bloodName
    //     firebase.database().ref('/').child("dataOfDonor/" + bloodNames ).on('child_added', snap => {
    //         let all = snap.val()
    //         all.id = snap.key
    //         console.log(all,bloodNames) 

    //         this.setState({


    //         })


    //     })

    // }
   
    donateForm() {
        this.props.history.push('/donateForm')
    }

    render() {
        console.log(this.state.detail);
        console.log(this.props.bloodDonors);
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1" style={style}>Welcome To Blood Bank</span>
                    <RaisedButton label="Sign Out"  primary={true} style={styless}  onClick={this.signOut.bind(this)}  />
                </nav>
                <p style={{ fontSize: '20px' }}>Select your Blood Group </p>
                <button type="button" className="btn btn-primary" style={styleOne} onClick={this.donateForm.bind(this)}>donate Blood</button>

                <DropDownMenu value={this.state.value} onChange={this.handleBgroup.bind(this)} style={{}} ref="blood"  >
                    <MenuItem value={1} primaryText="Blood Group" disabled />
                    <MenuItem value={2} primaryText="A+" />
                    <MenuItem value={3} primaryText="B+" />
                    <MenuItem value={4} primaryText="AB+" />
                    <MenuItem value={5} primaryText="O+" />
                    <MenuItem value={6} primaryText="O-" />
                    <MenuItem value={7} primaryText="AB-" />
                    <MenuItem value={8} primaryText="B-" />
                    <MenuItem value={9} primaryText="A-" />
                </DropDownMenu>

                <Table>
                    <TableHeader  displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                            <TableHeaderColumn>Number</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Address</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
                <div>
                
                {
                    // console.log(this.state.detail)                    
                    Object.keys(this.props.bloodDonors).map((key, i)=> { 
                        let val = this.props.bloodDonors[key]
                        console.log(val)
                        return (
                            <Table key={i}>
                                <TableBody  >
                                    <TableRow>
                                        <TableRowColumn>{val.name}</TableRowColumn>
                                        <TableRowColumn>{val.blood}</TableRowColumn>
                                        <TableRowColumn>{val.number}</TableRowColumn>
                                        <TableRowColumn>{val.email}</TableRowColumn>
                                        <TableRowColumn>{val.address}</TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        )
                    })
                    }
                   {/* {
                       this.state.detail.map((v,i)=>{
                           console.log(v)
                       })
                   } */}

                </div>
            </div>
        )
    }



}

function mapStateToProp(state) {
    console.log(state, 'state')
    return ({
        userName: state.root.userName,
        bloodDonors: state.root.bloodDonors,
        AVAILABLE_DONORS: state.root.AVAILABLE_DONORS

    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // submit:(data)=>dispatch(submit(data))
        requestBlood: (blood) => dispatch(requestBlood(blood)),
        SignOut: () => { dispatch(SignOut()) }
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(Select);