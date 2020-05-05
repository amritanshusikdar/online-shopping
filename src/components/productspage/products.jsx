import React from "react";
import Product from "./product";
import { CardColumns } from "react-bootstrap";

class Products extends React.Component {
    render() {
        return (
            <CardColumns>
                {this.props.jsonData.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        path={product.path}
                        onAddProduct={this.props.onAddProduct}
                    />
                ))}
            </CardColumns>
        );
    }
}

export default Products;
