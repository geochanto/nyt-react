import React from "react";
import { Row, Col, Container } from 'reactstrap';

const ResultList = props => {
  const topResults = [];
  for (let i = 0; i < 5; i++) {
    topResults.push(props.results[i])
    // console.log(props.results[i]);
  }
  console.log(topResults);
  // return <div>blah</div>

    return (
      <Container>
        {
          topResults.map(result => (
            // <Row key={result.web_url}>
            //   <Col>
            //     {result.web_url}
            //   </Col>
            // </Row>
            console.log('RESULT:' + result)

          ))
          }
      </Container>
    );


};

export default ResultList;
