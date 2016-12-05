import React, { Component } from 'react';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {email: "", password: "", confirm: ""};

	}

	updateUsername(event){
		let email = event.target.value;
		this.setState({email});
	}

	updatePassword(event){
		let password = event.target.value;
		this.setState({password});
	}

	updateConfirm(event) {
		let pass = this.state.password;
		let confirm = event.target.value;
		if (pass !== confirm) {
			console.log("Passwords do not match.");
		}
		this.setState({confirm})
	}

	render() {
		return (
			<div>
				<Form onSubmit={ (e) => { e.preventDefault(); this.props.submitCallback(this.state); }}>
					<FormGroup controlId="email">
					  	<ControlLabel>Email</ControlLabel>
					  	<FormControl type="email" onChange={this.updateUsername.bind(this)} />
					</FormGroup>
					<FormGroup controlId="password">
					  	<ControlLabel>Password</ControlLabel>
					  	<FormControl type="password" onChange={this.updatePassword.bind(this)} />
					</FormGroup>
					<FormGroup controlId="confirmPassword">
					  	<ControlLabel>Confirm Password</ControlLabel>
					  	<FormControl type="password" onChange={this.updateConfirm.bind(this)} />
					</FormGroup>
					<Button bsStyle="primary" type="submit" block>Sign Up!</Button>
				</Form>
			</div>
		)
	}
}

export default SignupForm;
