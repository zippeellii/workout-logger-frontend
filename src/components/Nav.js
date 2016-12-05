import React, { Component } from 'react';


class Nav extends Component {
	activeClass(elem) {

	    // let a = document.getElementsByTagName('a');

	    // for (let i = 0; i < a.length; i++) {
	    //     a[i].classList.remove('active');
	    // }

	    // elem.classList.add('active');
	}

	render() {
		return (
			<table className="nav">
				<tbody>
					<tr className="nav">
						<td className="active" id="log-workout" onClick={this.activeClass(this)}>
							<a href="/log-workout">Log Workout</a>
						</td>
						<td id="view-program" onClick={this.activeClass(this)}>
							<a href="/view-program">View Program</a>
						</td>
						<td id="history" onClick={this.activeClass(this)}>
							<a href="/history">History</a>
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default Nav;