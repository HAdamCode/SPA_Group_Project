import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Wrapper from './Wrapper';
import Stores, {fetchStores} from './Stores';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper/>,
    children: [
      {
        path:"/stores",
        loader: fetchStores,
        element:<Stores/>
      },
      // {
      //   path:"/stores/new",
      //   loader:CreateStore,
      //   element:(<CreateStore/>)
      // }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
  </React.StrictMode>
);
