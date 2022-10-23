import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  return (
    <Provider store={ store }>
      <div className="App">
        <ProductPage />
        <CheckoutPage />
      </div>
    </Provider>
  );
}

export default App;
