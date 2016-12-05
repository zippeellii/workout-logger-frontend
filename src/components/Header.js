import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<table className="header">
					<tr>
						<td className="account-icon">
							<a href="/sign-up">
								<span className="glyphicon glyphicon-user"></span>
								<span>Log in</span>
							</a>
						</td>
						<td>
							<p className="UWL-logo-small">Ultimate Workout Logger</p>
						</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default Header;