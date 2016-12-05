import React, { Component } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';

var activeClass = function(){
	console.log('hello');
}

class Header extends Component {
	render() {
		return (
			<table className="nav">
				<tbody>
					<tr className="nav">
						<td className="active" id="log-workout">
							<a href="/log-workout" onClick={activeClass}>Log Workout</a>
						</td>
						<td id="view-program">
							<a href="/view-program" onClick={activeClass}>View Program</a>
						</td>
						<td id="history">
							<a href="/history" onClick={activeClass}>History</a>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Header;