import React, { Component } from 'react';
import {Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {email: "", password: ""};

	}

	updateUsername(event){
		let email = event.target.value;
		this.setState({email});
	}

	updatePassword(event){
		let password = event.target.value;
		this.setState({password});
	}

	render() {
		return (
			<div>
				<Form onSubmit={ (e) => { e.preventDefault(); this.props.loginCallback(this.state); }}>
					<FormGroup controlId="email">
					  	<ControlLabel>Email</ControlLabel>
					  	<FormControl type="email" onChange={this.updateUsername.bind(this)} />
					</FormGroup>
					<FormGroup controlId="password">
					  	<ControlLabel>Password</ControlLabel>
					  	<FormControl type="password" onChange={this.updatePassword.bind(this)} />
					</FormGroup>
					<Button bsStyle="primary" type="submit" block>Log In!</Button>
				</Form>
			</div>
		)
	}
}

export default LoginForm;
