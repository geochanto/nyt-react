import React from "react";
import { Row, Card, CardBody, CardTitle, Button, Col, Container } from 'reactstrap';

const ResultList = props => {

  return (
    <Row>
      {props.results.map(result => (
        // console.log(result.web_url)
        <Col>
          <Card key={result._id}>
            <CardBody>
              <CardTitle><a target="_blank" href={result.web_url}>{result.headline.main}</a></CardTitle>
              <Button color="info">Save</Button>
            </CardBody>
          </Card>
        </Col>
      ))
      }
    </Row>
  );

};

export default ResultList;
