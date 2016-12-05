import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class Program extends Component {
	render() {
		let title = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let monday = ['Hip thrusts', 'Pull ups', 'Military press', 'Lateral raises', 'Kettlebell swings'];
		let tuesday = ['Cardio/Active recovery'];
		let wednesday = ['Hip thrusts', 'Glute bridges', 'Donkey kicks', 'Band walks', 'Kettlebell swings'];
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

					<table className="program-day">
						<thead>
							<tr>
								<td><h3>{title[1]}</h3></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>{tuesday[0]}</p>
									<p>{tuesday[1]}</p>
									<p>{tuesday[2]}</p>
									<p>{tuesday[3]}</p>
									<p>{tuesday[4]}</p>
								</td>
							</tr>
						</tbody>
					</table>

					<table className="program-day">
						<thead>
							<tr>
								<td><h3>{title[2]}</h3></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<p>{wednesday[0]}</p>
									<p>{wednesday[1]}</p>
									<p>{wednesday[2]}</p>
									<p>{wednesday[3]}</p>
									<p>{wednesday[4]}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</Col>
			</Row>
		)
	}
}

export default Program;