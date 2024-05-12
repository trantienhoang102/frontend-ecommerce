// import { configureStore } from '@reduxjs/toolkit'
// import productReducer from './slides/productSlide'
// import userReducer from './slides/userSlide'
// import orderReducer from './slides/orderSlide'


// export const store = configureStore({
//   reducer: {
//     product: productReducer,
//     user: userReducer,
//     order: orderReducer
//   },
// })


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productReducer from './slides/productSlide'
import userReducer from './slides/userSlide'
import orderReducer from './slides/orderSlide'
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['product', 'user'],
}


const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  order: orderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)