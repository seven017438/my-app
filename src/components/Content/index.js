import React from 'react'
import { Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';

export default class Content extends React.cloneElement{
    render(){
        return(
            <Row>
            <Col sm={6} md={4} className="mb-3">
              <Card>
                <CardImg width="100%" src="https://fakeimg.pl/318x180/" alt="Card image cap" />
                <CardBody>
                  <CardTitle>商品名稱</CardTitle>
                  <CardSubtitle>
                    <h4><Badge color="success">售價：1000</Badge></h4>
                  </CardSubtitle>
                  <CardText>商品描述</CardText>
                  <Button color="secondary">購買</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        );
    }
}