import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <Header></Header>
      <main id="mainContainer">
        <div class="container">
          {/* <ProductsContainer></ProductsContainer>
          <CartContainer></CartContainer>
          <MessageContainer></MessageContainer>
          <Cart></Cart> */}
        </div>
      </main>
      <Footer></Footer>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
