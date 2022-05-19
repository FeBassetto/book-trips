import React from 'react';
import Routing from './routes';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}