import React from "react";
import "./shoppingcartitem.css";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Figure,
    Row,
} from "react-bootstrap";
import { FiPlus, FiMinus } from "react-icons/fi";

class ShoppingCartItem extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header>
                    <strong>
                        Product ID:{" "}
                        {Math.floor(Math.random() * 23467283 + 9865)}
                    </strong>
                </Card.Header>
                <Container>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title className="text-left">
                                    QUANTITY
                                </Card.Title>
                                <Card.Text className="text-justify large-font">
                                    {this.props.item.quantity}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Figure className="image-sizing">
                                    <Figure.Image
                                        width={300}
                                        height={320}
                                        alt={this.props.item.name}
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/" +
                                            this.props.item.path
                                        }
                                    />
                                </Figure>
                            </Col>
                            <Col>
                                <Card.Title>{this.props.item.name}</Card.Title>
                                <Card.Text>
                                    {this.props.item.description}
                                </Card.Text>
                            </Col>
                            <Col>
                                <ButtonGroup vertical>
                                    <Button
                                        variant="outline-success"
                                        onClick={() =>
                                            this.props.onAddProduct(
                                                this.props.item
                                            )
                                        }
                                    >
                                        <FiPlus fontSize="10em" />
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        onClick={() =>
                                            this.props.onSubtractProduct(
                                                this.props.item
                                            )
                                        }
                                    >
                                        <FiMinus fontSize="10em" />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                </Container>
                <Card.Footer className="text-muted text-center">
                    Stay Home, Stay Safe!
                </Card.Footer>
            </Card>
        );
    }
}

export default ShoppingCartItem;
