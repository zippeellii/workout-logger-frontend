import React, { Component } from 'react';
import LoginForm from './Forms/LoginForm';
import {Col} from 'react-bootstrap';
import request from 'request';


class Login extends Component {
	login(userInfo) {
		let email = userInfo.email;
		let password = userInfo.password;

		request.post({
			url: "http://localhost:8080/users/login", 
			json: {
				email: email, password: password
			},
		}, (err, res, body) => {
			if(!err && res.statusCode === 200) {
				console.log("Success!");
			} else {
				console.log(err, res.statusCode, body);
			}
		});
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