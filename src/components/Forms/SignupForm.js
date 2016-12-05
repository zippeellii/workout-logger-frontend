import React, { Component } from 'react';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {email: "", password: "", confirm: ""};

	}

	updateUsername(event){
		let email = event.target.value;
		this.setState({email: email});
	}

	updatePassword(event){
		let password = event.target.value;
		this.setState({password: password});
	}

	updateConfirm(event) {
		let pass = this.state.password;
		let confirm = event.target.value;
		if (pass !== confirm) {
			console.log("Passwords do not match.");
		}
		this.setState({confirm: confirm})
	}

	// handleSubmit(event) {
	// 	event.preventDefault();

	// 	console.log("props" this.props);
	// 	console.log("state", this.state);

	// 	let fn = this.props.submitCallback;
	// 	let email = this.state.email;
	// 	let password = this.state.password;
	// 	let confirm = this.state.confirm;
	// 	fn(this.state);
	// }
	render() {
		return (
			<div>
				<Form onSubmit={ (e) => { e.preventDefault(); this.props.submitCallback(this.state); }}>
					<FormGroup controlId="username">
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
