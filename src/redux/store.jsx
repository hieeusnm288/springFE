import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import brandSlice from "./slice/brandSlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    brand: brandSlice.reducer,
  },
});
export default store;
