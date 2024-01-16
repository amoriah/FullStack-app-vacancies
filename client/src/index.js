import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import routers from './routers';
import { App } from './App';

const router = createBrowserRouter(routers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
