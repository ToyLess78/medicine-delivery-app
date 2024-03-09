import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cart from './pages/Cart.tsx';
import Shop from './pages/Shop.tsx';
import {Layout} from './components/Layout.tsx';
import RedirectToShop from './pages/RedirectToShop.tsx';
import {store} from "./store/store.ts";
import {Provider} from "react-redux";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Shop/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '*',
                element: <RedirectToShop/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
