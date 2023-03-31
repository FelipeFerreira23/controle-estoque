import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Default } from "./layouts/Default";
import { AddProducts } from "./pages/AddProducts";
import { EditProduct } from "./pages/EditProduct";
import { ListProducts } from "./pages/ListProducts";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/default',
    element: <Default />,
    children: [
      {
        path: '/default/products',
        element: <ListProducts />
      },
      {
        path: '/default/add',
        element: <AddProducts />
      },
      {
        path: '/default/edit/:id',
        element: <EditProduct />
      }
    ]
  }
])