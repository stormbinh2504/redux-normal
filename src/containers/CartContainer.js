import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteProductInCart } from "../actions";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../constants/Message";

class CartContainer extends Component {
  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((cart, index) => {
        return (
          <CartItem
            key={index}
            item={cart}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
          ></CartItem>
        );
      });
    }

    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}></CartResult>;
    }

    return result;
  };

  render() {
    var { cart } = this.props;
    console.log("cart", cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
