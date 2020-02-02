import React from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

export default class App extends React.Component {
  render() {
    return (
      <div className="homediv">
        <Container>
          <Row>
            <Col>
              <Page1 />
            </Col>
          </Row>
          <Row>
            <Col>
              <Page2 />
            </Col>
          </Row>
          <Row>
            <Col>
              <Page3/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
