import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as mat from 'material-ui'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Paper, RaisedButton } from 'material-ui'
import * as firebase from 'firebase';
import {sendingData} from './store/action/action'
import Avatar from 'material-ui/Avatar';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table';

const style = {
    height: 500,
    width: 550,
    margin: 200,
    textAlign: 'center',
    display: 'inline-block',
};


class DonateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
            value: 1
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    changeVaue = (event, index, value) => {
        this.setState({
            value
        });
        console.log(value);
    }

    

    submit() {
        const donorInfo = {
            name: this.refs.name.getValue(),
            address: this.refs.address.getValue(),
            blood: this.state.value,
            number: this.refs.number.getValue(),
            email: this.refs.email.getValue()
        }

       
        this.props.sendingData(donorInfo)
        this.props.history.push('/select')
    }
    render() {
        return (
            <div>
                {/* <form onSubmit={this.submit.bind(this)}>
                    <br />
                    <h4>Fill the form with confirmation</h4>

                    <br />
                    <input placeholder="Your weight" type="number" ref="weight" required="required" />
                    <br />
                    <input placeholder="Your address" type="commentbox" ref="address" required="required" />
                    <br /> */}
                {/* <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{ width: 200 }}>
                        <MenuItem value={1} primaryText="Blood Group" />
                        <MenuItem value={2} primaryText="A+" />
                        <MenuItem value={3} primaryText="B+" />
                        <MenuItem value={4} primaryText="AB+" />
                        <MenuItem value={5} primaryText="O+" />
                        <MenuItem value={6} primaryText="O-" />
                        <MenuItem value={7} primaryText="AB-" />
                        <MenuItem value={8} primaryText="B-" />
                        <MenuItem value={9} primaryText="A-" />
                    </DropDownMenu> */}
                {/* <mat.SelectField
                    value={this.state.age}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-simple',
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </mat.SelectField> */}
                {/* <br /><br />
                    <button type="submit">Submit</button>

                </form> */}

                  <Paper zDepth={5} rounded={false} style={style}>

<TextField ref="name" type="text" floatingLabelText="Name" required /><br />
<TextField ref="address" type="text" floatingLabelText="Address" /><br />
<TextField ref="number" type="text" floatingLabelText="Number" disabled={false} /><br /><br />
<TextField ref="email" type="text" floatingLabelText="Email" /><br />


<DropDownMenu value={this.state.value} onChange={this.changeVaue}>

    <MenuItem value={1} disabled={true} primaryText="Blood Group" />
    <MenuItem value="A+" primaryText="A+" />
    <MenuItem value="A-" primaryText="A-" />
    <MenuItem value="B+" primaryText="B+" />
    <MenuItem value="B-" primaryText="B-" />
    <MenuItem value="AB+" primaryText="AB+" />
    <MenuItem value="AB-" primaryText="AB-" />
    <MenuItem value="O-" primaryText="O+" />
    <MenuItem value="O-" primaryText="O-" />
</DropDownMenu>
<br />

<RaisedButton label="Submit" primary={true} onClick={this.submit.bind(this)}>
</RaisedButton>

</Paper>
<TableBody>
            {/* {this.props.donors.map(function (val, i) {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{i + 1}</TableRowColumn>
                  <TableRowColumn> <Avatar src={val.photo} /></TableRowColumn>
                  <TableRowColumn>{val.name}</TableRowColumn>
                  <TableRowColumn>{val.email}</TableRowColumn>
                  <TableRowColumn>{val.blood}</TableRowColumn>
                </TableRow>
              )
            })} */}
          </TableBody>
            </div>
        )
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(DonateForm);

function mapStateToProp(state) {
    console.log(state, 'state')
    return ({
        userName: state.root.userName,
        donorState: state.root.sentData

    })
}

function mapDispatchToProp(dispatch) {
    return ({
        sendingData: (userDetail) => {
            dispatch(sendingData(userDetail))
        // submit:(data)=>dispatch(submit(data))
    }
    })
}
