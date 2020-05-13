import React from "react";
import { Card, Image, Table } from "react-bootstrap";
import Empty from "../empty-page";

class Checkout extends React.Component {
    render() {
        if (!this.props.items.some((item) => item.quantity > 0))
            return <Empty title="NO ITEMS IN SUMMARY" />;
        else {
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
                                    <th>Product Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
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
                                                    <td>
                                                        {" "}
                                                        <Image
                                                            thumbnail
                                                            width={100}
                                                            height="auto"
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                "/" +
                                                                item.path
                                                            }
                                                        ></Image>{" "}
                                                    </td>
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
                            <strong>
                                GRAND TOTAL:{" "}
                                <span style={{ fontSize: "2em" }}>
                                    €{grandTotal.toFixed(2)}
                                </span>
                            </strong>
                        </Card.Footer>
                    </Card>
                </React.Fragment>
            );
        }
    }
}

export default Checkout;
