import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<table className="header">
					<tbody>
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
					</tbody>
				</table>
			</div>
		)
	}
}

export default Header;