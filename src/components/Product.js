import React, { Component } from "react";
import * as Message from "../constants/Message";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  showRating = (rating) => {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(<i className="fa fa-star"></i>);
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(<i className="fa fa-star-o"></i>);
    }
    console.log("result", result);
    return result;
  };

  onAddToCart = (product) => {
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  };

  render() {
    const { name, image, description, price, inventory, rating, product } =
      this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={image} className="img-fluid" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.showRating(rating)}</ul>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <span className="left">{price}</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
