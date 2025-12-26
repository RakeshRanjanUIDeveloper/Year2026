import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  // Authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Rakesh Ranjan",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser :userName }}>
          <div className="app">
            <Header />
            <Outlet />
            <Footer />
          </div>
      </UserContext.Provider>
    </Provider>

  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery Component...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
