import React from 'react'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import {
  configureStore,
} from '@reduxjs/toolkit'

// import your reducers
import foodapp_reducer from '../store/reducer'

function render(ui, options) {
  const { preloadedState } = options 

  const store =
    configureStore({
        reducer: {foodapp:foodapp_reducer},
      preloadedState,
    })

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }