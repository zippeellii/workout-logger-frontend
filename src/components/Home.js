import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<Row className="show-grid">
		      <Col xs={12}>
		      	<p className="UWL-logo">Ultimate <br />Workout <br />Logger</p>
		      	<Button bsStyle="primary" bsSize="large" href="/sign-in">
		      		Sign up
		      	</Button>
		      </Col>
		    </Row>
		)
	}
}

export default Home;