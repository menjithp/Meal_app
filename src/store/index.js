/*************************
 * author   : Menjith P
 * Purpose  : Application store
 * 
 *******************/

import { configureStore } from '@reduxjs/toolkit'
import foodapp_reducer from './reducer'

export const store = configureStore({
  reducer: {foodapp:foodapp_reducer},
})

export default store;