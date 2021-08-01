import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions/index";
import message from "../reducers/message";

class ProductsContainer extends Component {
  showProducts = (products) => {
    var result = null;
    var { onAddToCart, onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            inventory={product.inventory}
            rating={product.rating}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          ></Product>
        );
      });
    }
    return result;
  };

  render() {
    var { products } = this.props;
    console.log(products);
    return (
      <Products products={products}>{this.showProducts(products)}</Products>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
