import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
