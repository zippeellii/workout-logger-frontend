import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class ProgramDay extends Component {
	render() {
		let title = ['Monday'];
		let monday = ['Hip thrusts', 'Pull ups', 'Military press', 'Lateral raises', 'Kettlebell swings'];
		return (
			<Row className="padding-inside">
				<Col xs={12}>
					<table className="program-day">
						<thead>
							<tr>
								<td><h3>{title[0]}</h3></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>{monday[0]}</p>
									<p>{monday[1]}</p>
									<p>{monday[2]}</p>
									<p>{monday[3]}</p>
									<p>{monday[4]}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		)
	}
}

export default ProgramDay;