import * as Types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
console.log("data", data);
const initialState = data ? data : [];
// const initialState = [
//   {
//     product: {
//       id: 1,
//       name: "Iphone 7",
//       image: "https://mobigo.vn/images/seoworld/vivo/part-6/image2.jpg",
//       description: "Sản phẩm do apple sản xuất",
//       price: 500,
//       inventory: 10,
//       rating: 3,
//     },
//     quantity: 4,
//   },
//   {
//     product: {
//       id: 3,
//       name: "Oppo s7",
//       image: "https://cf.shopee.vn/file/ff69ee0948c1cd1c21d08dbf1d3a7aa6_tn",
//       description: "Sản phẩm do china sản xuất",
//       price: 450,
//       inventory: 7,
//       rating: 5,
//     },
//     quantity: 5,
//   },
// ];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
