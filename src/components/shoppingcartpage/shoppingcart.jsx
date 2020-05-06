import React from "react";
import ShoppingCartItem from "./shoppingcartitem";
import { ListGroup } from "react-bootstrap";
import Empty from "../empty-page";

class ShoppingCart extends React.Component {
    render() {
        if (!this.props.items.some((item) => item.quantity > 0)) {
            return <Empty title="NO ITEMS IN CART" />;
        } else
            return (
                <ListGroup>
                    {this.props.items
                        .filter((item) => item.quantity > 0)
                        .map((item, idx) => (
                            <ShoppingCartItem
                                key={idx}
                                item={item}
                                onAddProduct={this.props.onAddProduct}
                                onSubtractProduct={this.props.onSubtractProduct}
                            />
                        ))}
                </ListGroup>
            );
    }
}

export default ShoppingCart;
