import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const persistConfig = {
    key: 'root', 
    storage, 
    blacklist: []
}

const middlewares = [
    thunk,
    process.env.NODE_ENV === "development" && logger,
  ].filter(Boolean);

const persisitedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persisitedReducer, 
    middleware: middlewares
})

export const persistor = persistStore(store);