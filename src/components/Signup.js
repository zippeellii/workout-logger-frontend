import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import SignupForm from './Forms/SignupForm';

class Signup extends Component {
	submit(userInfo) {
		// This should take the email, password, and confirmation password
		// and send them to the sign-up endpoint
		let email = userInfo.email;
		let password = userInfo.password;
		let confirm = userInfo.confirm;
		console.log(`Submitting for email: ${email}`);
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
