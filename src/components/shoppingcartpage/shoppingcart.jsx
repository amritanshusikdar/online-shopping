import React from "react";
import ShoppingCartItem from "./shoppingcartitem";
import { ListGroup } from "react-bootstrap";

class ShoppingCart extends React.Component {
    render() {
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
