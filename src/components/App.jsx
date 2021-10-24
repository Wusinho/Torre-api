import React from 'react'
import { Provider } from 'react-redux';
import store from '../store/configureStore'
import UserSubmit from './UserSubmit'

const App = () => (
    <Provider store={store}>
      <div>
        <UserSubmit/>

      </div>

    </Provider>
);

export default App
