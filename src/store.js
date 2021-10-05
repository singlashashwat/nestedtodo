import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import history from './history'
import createRootReducer from './reducers'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './reducers/rootSagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import immutableTransform from 'redux-persist-transform-immutable'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, routerMiddleware(history), thunk]

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`)

  const logger = createLogger({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state)),
  })

  middlewares.push(logger)
}

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: storage,
  whitelist: [], // only  will be persisted
}

const store = createStore(
  persistReducer(persistConfig, createRootReducer(history)),
  applyMiddleware(...middlewares)
)

export let persistor = persistStore(store)

sagaMiddleware.run(rootSagas)

export default store