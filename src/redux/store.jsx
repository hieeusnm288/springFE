import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const initialState = {};

function configureAppStore(preLoadedState) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: preLoadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducers");
    store.replaceReducer(rootReducer);
  }

  return store;
}

export default configureAppStore(initialState);
