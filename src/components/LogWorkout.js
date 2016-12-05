import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem, Row, Col } from 'react-bootstrap';

class LogWorkout extends Component {
	render() {
		return (
			<Row>
				<Col xs={12} className="centered-content">
					<Button bsStyle="info" className="fake-btn-block">Log today's workout</Button>
					<DropdownButton title="Log from current program" id="dropdown-size-large" className="fake-btn-block">
				        <MenuItem eventKey="1">Day 1 or Monday</MenuItem>
				        <MenuItem eventKey="2">Day 2 or Tuesday or whatever</MenuItem>
				        <MenuItem eventKey="3">Day etc. etc.</MenuItem>
			        </DropdownButton>
			        <Button bsSize="lg" bsStyle="primary" className="btn-block anchored-bottom">
			        	<span className="glyphicon glyphicon-ok"></span> Save
			        </Button>
		        </Col>
			</Row>
		)
	}
}

export default LogWorkout;