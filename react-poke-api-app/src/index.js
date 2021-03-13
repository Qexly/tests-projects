import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import appStore from './redux/redux-store.js';
import {Provider} from 'react-redux';
import Loader from './components/Loader/Loader';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={appStore}>
    <React.StrictMode>
      <Suspense fallback={<Loader/>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
