import axios from "axios";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./root-reducer";
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import * as api from "../config";
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client: axios,
      api
    })
  )
))