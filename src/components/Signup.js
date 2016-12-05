import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import SignupForm from './Forms/SignupForm';
import request from 'request';

class Signup extends Component {
	submit(userInfo) {
		// This should take the email, password, and confirmation password
		// and send them to the sign-up endpoint
		let email = userInfo.email;
		let password = userInfo.password;
		let confirm = userInfo.confirm;
		request.post({
			url: "http://localhost:8080/users/create", 
			json: {
				email: email, password: password, confirm_password: confirm
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
			<div>
				<Col xs={12} md={8}>
					<SignupForm submitCallback={this.submit.bind(this)} />
			    </Col>
			</div>
		)
	}
}

export default Signup;
