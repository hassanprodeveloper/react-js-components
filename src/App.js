// import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Carousel from "./Components/Meet-Carousel";

export default () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div  >
          <Carousel size={300} />
        </div>
      </div>
      {/* <div className="container">
        <div style={{ margin: 10 }}>
          <h1>React Redux Bolier Paller.</h1>
          <h2>Redux with API intigration </h2>
        </div>
         <div style={{ margin: 10 }}>
          <h1>React Redux-Saga Bolier Paller.</h1>
          <h2>Redux-Saga with API intigration </h2>
        </div>
      </div> */}
    </Provider>
  );
};
