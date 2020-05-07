import React from "react";
import { Link } from "react-router-dom";
import { Badge, Navbar, Button } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";

const NavigationBar = (props) => {
    return (
        <React.Fragment>
            <Navbar
                className="justify-content-between"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Link to="/online-shopping/">
                    <Navbar.Brand>THE SAVAGE SHOPPING SPREE</Navbar.Brand>
                </Link>

                <Navbar.Text style={{ fontSize: "1.2em" }}>
                    <strong>
                        Total in Cart:{" "}
                        <Badge
                            variant={props.total !== 0 ? "info" : "warning"}
                            pill
                        >
                            {props.total ? props.total : "Zero"}
                        </Badge>
                    </strong>
                </Navbar.Text>
                <div>
                    <Link to="/online-shopping/">
                        <Button variant="outline-success" className="mr-2">
                            <AiTwotoneHome className="mr-1" fontSize="1.3em" />
                            Home{" "}
                        </Button>
                    </Link>
                    <Button
                        onClick={() => props.onReset()}
                        variant="outline-info"
                        className="mr-2"
                    >
                        <RiRefreshLine className="mr-1" fontSize="1.3em" />{" "}
                        Reset Cart
                    </Button>
                    <Link to="/online-shopping/shopping-cart/">
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
