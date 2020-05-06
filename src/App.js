import React, { Component } from "react";
import product_data from "./JSON/data.json";
import Products from "./components/productspage/products";
import ShoppingCart from "./components/shoppingcartpage/shoppingcart";
import NavigationBar from "./components/navigationbar";
import Checkout from "./components/checkoutpage/checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification, { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

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
        this.handleReset = this.handleReset.bind(this);
    }

    makeToast(titleN, itemName, notifType) {
        return store.addNotification({
            title: titleN,
            message: itemName,
            type: notifType,
            insert: "bottom",
            container: "bottom-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true,
                pauseOnHover: true,
            },
        });
    }

    handleAddProduct(item) {
        let items = [...this.state.items];
        let index = items.findIndex((i) => i.id === item.id);
        let total = this.state.total;
        total++;
        items[index] = { ...item };
        items[index].quantity++;
        this.setState({ total, items });
        this.makeToast("Product Added to Cart!", items[index].name, "success");
    }

    handleSubtractProduct(item) {
        let items = [...this.state.items];
        let index = items.findIndex((i) => i.id === item.id);
        let total = this.state.total;
        total--;
        items[index] = { ...item };
        items[index].quantity--;
        this.setState({ total, items });

        const title = total !== 0 ? "Removed From Cart!" : "Empty Cart!";
        const message =
            total !== 0
                ? items[index].name
                : "All items from the Cart have been removed.";
        const notifType = title !== "Empty Cart!" ? "danger" : "warning";
        this.makeToast(title, message, notifType);
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
        return (
            <ShoppingCart
                onAddProduct={this.handleAddProduct}
                onSubtractProduct={this.handleSubtractProduct}
                items={this.state.items}
            />
        );
    }

    handleReset() {
        let items = [...this.state.items];
        items.map((item) => (item.quantity = 0));
        this.setState({ total: 0, items });
        this.makeToast(
            "Reset Successful!",
            "Cart has been successfully reset.",
            "info"
        );
    }

    render() {
        return (
            <React.Fragment>
                <ReactNotification />
                <Router>
                    <React.Fragment>
                        <NavigationBar
                            onProducts={this.showProducts}
                            onShoppingCart={this.showShoppingCart}
                            total={this.state.total}
                            onReset={this.handleReset}
                        />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={this.showProducts}
                            />
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
            </React.Fragment>
        );
    }
}

export default App;
