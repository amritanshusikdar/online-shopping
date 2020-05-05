import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingBag, FaSearchDollar } from "react-icons/fa";
// import { ToastProvider, useToasts } from "react-toast-notifications";

const NavigationBar = (props) => {
    // const { addToast } = useToasts();
    // const Something = () => {
    //     addToast("Damnson", {
    //         appearance: "success",
    //         autoDismiss: true,
    //     });
    // };
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    The Savage Shopping Spree
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="products">Products</Nav.Link>
                    <Nav.Link href="shopping-cart">Shopping Cart</Nav.Link>
                    <Nav.Link href="checkout">CheckOut</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Products..."
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info" className="mr-2">
                        <FaSearchDollar className="mr-1" fontSize="1.2em" />{" "}
                        Search
                    </Button>
                    <Button variant="outline-light" className="mr-2">
                        <FaShoppingBag className="mr-1" fontSize="1.2em" />{" "}
                        Shopping Cart
                    </Button>
                </Form>
            </Navbar>
        </React.Fragment>
    );
};

export default NavigationBar;
