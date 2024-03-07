import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { TbBrandShopee } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { Layout, Menu, theme, Row, Col, Avatar } from "antd";
import { BiLogoShopify, BiCategoryAlt } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { BiSignal5 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import "./Dashboard.scss";
import { MdOutlineManageAccounts, MdLogout } from "react-icons/md";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../home/Home";
import AddOrEdit from "../category/AddOrEdit";
import ListCatagories from "../category/ListCatagories";

const { Header, Sider, Content } = Layout;
function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible className="fix-top">
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <AiOutlineHome />,
                label: "Home",
                onClick: () => navigate("/"),
              },
              {
                key: "2",
                icon: <BiCategoryAlt />,
                label: "Categories",
                children: [
                  {
                    key: "3",
                    icon: <IoMdAddCircleOutline />,
                    label: "Add Category",
                    onClick: () => navigate("/category/add"),
                  },
                  {
                    key: "4",
                    icon: <FaRegListAlt />,
                    label: "List Categories",
                    onClick: () => navigate("/categories"),
                  },
                ],
              },
              {
                key: "5",
                icon: <TbBrandShopee />,
                label: "Products",
                children: [
                  {
                    key: "6",
                    icon: <IoMdAddCircleOutline />,
                    label: "Add Product",
                  },
                  {
                    key: "7",
                    icon: <FaRegListAlt />,
                    label: "List Products",
                  },
                ],
              },
              {
                key: "8",
                icon: <BiLogoShopify />,
                label: "Brands",
                children: [
                  {
                    key: "9",
                    icon: <IoMdAddCircleOutline />,
                    label: "Add Brand",
                  },
                  {
                    key: "10",
                    icon: <FaRegListAlt />,
                    label: "List Brands",
                  },
                ],
              },
              {
                key: "11",
                icon: <LiaFileInvoiceDollarSolid />,
                label: "Invoice",
              },
              {
                key: "12",
                icon: <BiSignal5 />,
                label: "statistic",
              },
              {
                key: "13",
                icon: <CgProfile />,
                label: "Profile",
              },
              {
                key: "14",
                icon: <MdOutlineManageAccounts />,
                label: "Account",
              },
              {
                key: "15",
                icon: <MdLogout />,
                label: "Logout",
              },
            ]}
          />
        </Sider>
        <Layout className="fix-content">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col md={20}>
                <h1>Personal Project: Store Management</h1>
              </Col>
              <Col md={4}>
                <div>
                  <Avatar icon={<UserOutlined />}></Avatar> Nguyễn Minh Hiếu
                </div>
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route element={<Home />} path="/"></Route>
              <Route element={<AddOrEdit />} path="/category/add"></Route>
              <Route element={<ListCatagories />} path="/categories"></Route>
              {/* <Route element={<Home />} path="/"></Route> */}
              {/* <Route element={<Home />} path="/"></Route> */}
            </Routes>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
