import React from 'react'
import { Provider } from 'react-redux';
import store from '../store/configureStore'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Welcome Page!
      </div>

    </Provider>
  )
}

export default App
