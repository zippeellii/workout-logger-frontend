import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<div>
				<table>
					<tr className="nav">
						<td>
							<a>
								<span>Log in</span>
							</a>
						</td>
						<td>
							<a>
								<span>Log in</span>
							</a>
						</td>
						<td>
							<a>
								<span>Log in</span>
							</a>
						</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default Header;