import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import './index.css';

export default class Page2 extends React.Component {
    render() {
        return (
            <Container fluid={true} className="containerpage2">
                <Row className="rowpage2">
                    <Col className="colpage2">
                        <h1>What I do</h1>
                    </Col>
                </Row>
                <Row className="rowpage2">
                    <Col className="colpage2">
                        <img src="https://fakeimg.pl/320x190/" />
                        <h3>Project Management</h3>
                        <Col id="contenttext">
                            <p>I'm detail-oriented and have excellent communication skills. I'm responsible for planning and overseeing projects to ensure they are completed in a timely fashion.I plan and designate project resources, prepare budgets, monitor progress, and keep stakeholders informed the entire way. </p>
                        </Col>
                    </Col>
                    <Col className="colpage2">
                        <img src="https://fakeimg.pl/320x190/" />
                        <h3>UX Research & Testing</h3>
                        <Col id="contenttext">
                            <p>I start with some user research, build a user flow and do some usability testing. I solve problems by understanding user needs and develop user centric products with my clients.</p>
                        </Col>
                    </Col>
                    <Col className="colpage2">
                        <img src="https://fakeimg.pl/320x190/" />
                        <h3>UI Design</h3>
                        <Col id="contenttext">
                            <p>I design user friendly and visually appealing products. I craft delightful experiences that let users achieve their goals. I prepare mockups, design systems and interaction guides to communitate with developement teams.</p>
                        </Col>
                    </Col>
                </Row>
                <Row className="row2page2">
                    <Col className="button">
                        <Button color="primary">View the Skills</Button>{' '}
                    </Col>
                </Row>
            </Container>
        );
    }
}