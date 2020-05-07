import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import "./product.css";

import "react-notifications-component/dist/theme.css";
import "animate.css";

class Product extends React.Component {
    render() {
        return (
            <Card className="shadow-lg">
                <Card.Img variant="top" src={this.props.path} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <br />
                    <Row>
                        <Col>
                            <Card.Text className="text-middle">
                                <strong>Price: </strong>
                                <em>
                                    <strong>€{this.props.price}</strong>
                                </em>
                            </Card.Text>
                        </Col>
                        <Col>
                            <Button
                                onClick={() =>
                                    this.props.onAddProduct(this.props.product)
                                }
                                className="float-right"
                                variant="secondary"
                            >
                                <MdAddShoppingCart
                                    className="mr-2"
                                    fontSize="1.5em"
                                />
                                Add to Cart
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default Product;
