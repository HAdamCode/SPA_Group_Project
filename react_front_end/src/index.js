import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import Stores, { fetchStores } from './Stores';
import SingleStore, { getStore } from './SingleStore';
import Items, { getItems } from './Items';
import NewStore from './NewStore';
import NewItem from './NewItem';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/stores",
        loader: fetchStores,
        element: <Stores />
      },
      {
        path: "/stores/:store_id",
        loader: getStore,
        element: <SingleStore />
      },
      {
        path: "/stores/:store_id/items",
        loader: getItems,
        element: (<Items />)
      },
      {
        path: "/stores/new",
        loader: NewStore,
        element: (<NewStore />)
      },
      {
        path: "/stores/:store_id/items/new",
        loader: null,
        element: (<NewItem />)
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
);
