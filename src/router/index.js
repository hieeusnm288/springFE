import Dashboard from "../components/dashboard/Dashboard";
import LoginPage from "../pages/Login/FormLogin/LoginPage";
import Register from "../pages/Login/RegisterForm/Register";
import AddOrEditBrand from "../pages/brand/AddOrEditBrand";
import ListBrand from "../pages/brand/ListBrand";
import AddOrEdit from "../pages/category/AddOrEdit";
import ListCatagories from "../pages/category/ListCatagories";
import Home from "../pages/home/Home";

const adminRouter = [
  { path: "/login", component: LoginPage, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/", component: Home, layout: Dashboard },

  // Router Category
  { path: "/list-category", component: ListCatagories, layout: Dashboard },
  {
    path: "/category/add",
    component: AddOrEdit,
    layout: Dashboard,
  },
  {
    path: "/category/add/:id",
    component: AddOrEdit,
    layout: Dashboard,
  },

  //Router Brand
  {
    path: "/list-brands",
    component: ListBrand,
    layout: Dashboard,
  },
  {
    path: "/brand/add",
    component: AddOrEditBrand,
    layout: Dashboard,
  },

  //   // Danh Bạ
  //   {
  //     path: "/utility/contacts",
  //     component: DanhBa,
  //     layout: Dashboard,
  //   },

  //   //Tài Khoản
  //   {
  //     path: "/user-account-management",
  //     component: TaiKhoan,
  //     layout: Dashboard,
  //   },
];

const guestRouter = [];

export { adminRouter, guestRouter };
