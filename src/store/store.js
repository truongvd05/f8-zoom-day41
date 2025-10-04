import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer } from "./product";
import { uiReducer } from "./ui";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});

const middlewares = [thunk];

// chỉ thêm logger nếu đang ở development
if (import.meta.env.MODE === "development") {
    middlewares.push(logger);
}

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
