import React from "react";
import store from "./store/store";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <h1>Profile Creator</h1>
      <p>Hello world</p>
      <Test store={store} />
    </div>
  );
}

export default App;
