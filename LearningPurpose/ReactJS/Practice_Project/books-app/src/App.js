import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import { BookProvider } from "./components/BookContext";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
