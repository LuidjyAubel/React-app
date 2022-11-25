import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})