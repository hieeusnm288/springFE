import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./pages/Login/FormLogin/LoginPage";
import Register from "./pages/Login/RegisterForm/Register";
import AddOrEdit from "./pages/category/AddOrEdit";
import ListCatagories from "./pages/category/ListCatagories";
import ListBrand from "./pages/brand/ListBrand";
import AddOrEditBrand from "./pages/brand/AddOrEditBrand";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/"></Route>
          {/* <Route element={<Home />} path="/dash"></Route> */}
          <Route element={<AddOrEdit />} path="/category/add"></Route>
          <Route element={<AddOrEdit />} path="/category/add/:id"></Route>
          <Route element={<ListCatagories />} path="/categories"></Route>
          <Route element={<ListBrand />} path="/listbrand"></Route>
          <Route element={<AddOrEditBrand />} path="/brand/add"></Route>
          <Route element={<AddOrEditBrand />} path="/brand/add/:id"></Route>
          <Route element={<LoginPage />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
