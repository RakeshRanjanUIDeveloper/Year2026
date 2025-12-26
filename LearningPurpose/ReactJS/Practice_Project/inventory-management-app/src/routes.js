import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Departments from "./pages/Departments";
import ProductList from "./pages/ProductList";
import Error from "./pages/Error";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'',
                element:<Dashboard />
            },
            {
                path:'Departments',
                element: <Departments />
            },
            {
                path:'Products/:department',
                element:<ProductList />
            },
            {
                path:'Product/:id',
                element: <ProductDetail />
            },
            {
                path: 'AddProduct',
                element: <AddProduct />
            }
        ],
        errorElement: <Error />
    }
])

export default appRouter

