import React, { Component } from "react";
import product_data from "./JSON/data.json";
import Products from "./components/productspage/products";
import ShoppingCart from "./components/shoppingcartpage/shoppingcart";
import NavigationBar from "./components/navigationbar";
import Checkout from "./components/checkoutpage/checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            items: [...product_data],
        };

        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleSubtractProduct = this.handleSubtractProduct.bind(this);
        this.showProducts = this.showProducts.bind(this);
        this.showShoppingCart = this.showShoppingCart.bind(this);
    }

    handleAddProduct(item) {
        let items = [...this.state.items];
        let index = items.findIndex((i) => i.id === item.id);
        items[index] = { ...item };
        items[index].quantity++;
        this.setState({ items });
    }

    handleSubtractProduct(item) {
        let items = [...this.state.items];
        let index = items.findIndex((i) => i.id === item.id);
        items[index] = { ...item };
        items[index].quantity--;
        this.setState({ items });
    }

    showProducts() {
        return (
            <Products
                jsonData={this.state.items}
                onAddProduct={this.handleAddProduct}
            />
        );
    }

    showShoppingCart() {
        return <ShoppingCart items={this.state.items} />;
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <NavigationBar
                        onProducts={this.showProducts}
                        onShoppingCart={this.showShoppingCart}
                    />
                    <Switch>
                        <Route exact path="/" component={this.showProducts} />
                        <Route
                            path="/shopping-cart"
                            component={this.showShoppingCart}
                        />
                        <Route path="/checkout">
                            <Checkout items={this.state.items} />
                        </Route>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
