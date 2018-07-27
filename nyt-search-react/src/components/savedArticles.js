import React, { Component } from "react";
import API from "../utils/API";
import { Row, Col } from 'reactstrap';

const SavedArticles = (props) => {
        return (
            <Row>
            {props.savedResults.map(item => ( 
                <Col key={item._id}>
                {item.title}
                </Col>   
            )) }
            </Row>
        )
}

export default SavedArticles;

