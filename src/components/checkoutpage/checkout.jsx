import React from "react";
import { Card, Table } from "react-bootstrap";

class Checkout extends React.Component {
    render() {
        const prices = this.props.items
            .filter((item) => item.quantity > 0)
            .map((item) => item.price);

        const quantities = this.props.items
            .filter((item) => item.quantity > 0)
            .map((item) => item.quantity);

        let grandTotal = 0;
        for (let i = 0; i < prices.length; i++) {
            grandTotal += prices[i] * quantities[i];
        }

        return (
            <React.Fragment>
                <Card>
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Sr. No.:</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sum</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.items
                                .filter((item) => item.quantity > 0)
                                .map((item, idx) => {
                                    return (
                                        <React.Fragment>
                                            <tr key={idx}>
                                                <td>{idx + 1}</td>
                                                <td> {item.name} </td>
                                                <td> €{item.price} </td>
                                                <td> {item.quantity} </td>
                                                <td>
                                                    €
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    );
                                })}
                        </tbody>
                    </Table>
                    <Card.Footer className="text-right">
                        <strong>GRAND TOTAL: €{grandTotal}</strong>
                    </Card.Footer>
                </Card>
            </React.Fragment>
        );
    }
}

export default Checkout;
