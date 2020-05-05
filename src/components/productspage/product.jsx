import React from "react";
import { Button, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";

class Product extends React.Component {
    render() {
        return (
            <Card className="shadow-lg">
                <Card.Img variant="top" src={this.props.path} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <OverlayTrigger
                        overlay={
                            <Popover>
                                <Popover.Title as="h1">
                                    <strong>Price</strong>
                                </Popover.Title>
                                <Popover.Content>
                                    <em>
                                        <strong>€{this.props.price}</strong>
                                    </em>
                                </Popover.Content>
                            </Popover>
                        }
                    >
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
                    </OverlayTrigger>
                    <br />
                    <br />
                </Card.Body>
            </Card>
        );
    }
}

export default Product;
