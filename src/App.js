import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./pages/Login/FormLogin/LoginPage";
import Register from "./pages/Login/RegisterForm/Register";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Dashboard />} path="/"></Route>
          <Route element={<LoginPage />} path="/login"></Route>
          <Route element={<Register />} path="/register"></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
