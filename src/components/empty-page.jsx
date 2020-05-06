import React from "react";
import { Card } from "react-bootstrap";
import "./empty-page.css";

const Empty = (props) => (
    <React.Fragment>
        <Card
            className="center-screen shadow-cool text-center"
            border="dark"
            style={{ width: "18rem" }}
        >
            <Card.Header>
                <strong>{props.title}</strong>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    Please add the products you like to the add, in order to see
                    them here.
                </Card.Title>
            </Card.Body>
        </Card>
    </React.Fragment>
);

export default Empty;
