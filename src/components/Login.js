import React, { Component } from 'react';
import LoginForm from './Forms/LoginForm';
import {Col} from 'react-bootstrap';


class Login extends Component {
	constructor() {
		super();
	}

	login(userInfo) {
		let email = userInfo.email;
		let password = userInfo.password;
		console.log(`Submitting for email: ${email}`)
	}

	render() {
		return (
			<Col xs={12} md={8}>
				<LoginForm loginCallback={this.login.bind(this)} />
			</Col>
		)
	}
}

export default Login;