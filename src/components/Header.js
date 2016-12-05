import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<table className="header">
					<tr>
						<td className="account-icon">
							<Button href="/log-in">
								<span className="glyphicon glyphicon-user"></span>
								<span>Log in</span>
							</Button>
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