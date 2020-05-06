import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingBag, FaSearchDollar } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";

const NavigationBar = (props) => {
    return (
        <React.Fragment>
            <Navbar
                className="justify-content-between"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Link to="/">
                    <Navbar.Brand>THE SAVAGE SHOPPING SPREE</Navbar.Brand>
                </Link>

                <Navbar.Text style={{ fontSize: "1.2em" }}>
                    <strong>Total in Cart: {props.total}</strong>
                </Navbar.Text>
                <div>
                    <Button
                        onClick={() => props.onReset()}
                        variant="outline-info"
                        className="mr-2"
                    >
                        <RiRefreshLine className="mr-1" fontSize="1.3em" />{" "}
                        Reset Cart
                    </Button>
                    <Link to="/shopping-cart">
                        <Button variant="outline-light" className="mr-2">
                            <FaShoppingBag className="mr-1" fontSize="1.2em" />{" "}
                            Shopping Cart
                        </Button>
                    </Link>
                </div>
            </Navbar>
        </React.Fragment>
    );
};

export default NavigationBar;
