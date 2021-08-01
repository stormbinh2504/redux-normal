var initialState = [
  {
    id: 1,
    name: "Iphone 7",
    image: "https://mobigo.vn/images/seoworld/vivo/part-6/image2.jpg",
    description: "Sản phẩm do apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 3,
  },
  {
    id: 2,
    name: "Galaxy S7",
    image: "https://mobigo.vn/images/seoworld/vivo/part-6/image2.jpg",
    description: "Sản phẩm do samsung sản xuất",
    price: 400,
    inventory: 15,
    rating: 4,
  },
  {
    id: 3,
    name: "Oppo s7",
    image: "https://cf.shopee.vn/file/ff69ee0948c1cd1c21d08dbf1d3a7aa6_tn",
    description: "Sản phẩm do china sản xuất",
    price: 450,
    inventory: 7,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
