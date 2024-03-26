import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import brandSlice from "./slice/brandSlice";
import productSlice from "./slice/productSlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    brand: brandSlice.reducer,
    product: productSlice.reducer,
  },
});
export default store;
