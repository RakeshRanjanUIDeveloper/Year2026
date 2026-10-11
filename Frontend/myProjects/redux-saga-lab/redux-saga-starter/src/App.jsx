import React from "react";
import { Provider } from "react-redux";
import store from "./todo/redux/store";
import TodoApp from "./todo/components/TodoApp";

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;