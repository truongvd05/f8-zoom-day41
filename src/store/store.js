import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./product";
import { uiReducer } from "./ui";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
