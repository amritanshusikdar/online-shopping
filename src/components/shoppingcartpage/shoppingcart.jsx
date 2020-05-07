import React from "react";
import ShoppingCartItem from "./shoppingcartitem";
import { Container, ListGroup, Button } from "react-bootstrap";
import { FaMoneyCheck } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import Empty from "../empty-page";
import { Link } from "react-router-dom";

class ShoppingCart extends React.Component {
    render() {
        if (!this.props.items.some((item) => item.quantity > 0)) {
            return <Empty title="NO ITEMS IN CART" />;
        } else
            return (
                <React.Fragment>
                    <br />
                    <Container style={{ textAlign: "center" }}>
                        <Link to="/checkout">
                            <Button variant="warning">
                                <FaMoneyCheck
                                    className="mr-5"
                                    fontSize="10em"
                                />
                                <strong>CHECKOUT</strong>
                                <RiArrowRightSLine fontSize="10em" />
                            </Button>
                        </Link>
                    </Container>
                    <br />
                    <ListGroup>
                        {this.props.items
                            .filter((item) => item.quantity > 0)
                            .map((item, idx) => (
                                <ShoppingCartItem
                                    key={idx}
                                    item={item}
                                    onAddProduct={this.props.onAddProduct}
                                    onSubtractProduct={
                                        this.props.onSubtractProduct
                                    }
                                />
                            ))}
                    </ListGroup>
                    <br />
                    <Container style={{ textAlign: "center" }}>
                        <Link to="/checkout">
                            <Button variant="warning">
                                <FaMoneyCheck
                                    className="mr-5"
                                    fontSize="10em"
                                />
                                <strong>CHECKOUT</strong>
                                <RiArrowRightSLine fontSize="10em" />
                            </Button>
                        </Link>
                    </Container>
                    <br />
                </React.Fragment>
            );
    }
}

export default ShoppingCart;
