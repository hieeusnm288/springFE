import React, { useEffect, useState } from "react";
import logo from "../../image/logo.svg";
import "./Dashboradcline.scss";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { getListCate } from "../../redux/slice/categorySlice";
import { getListBrand } from "../../redux/slice/brandSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Badge } from "antd";
function DashbordClient({ children }) {
  const dispatch = useDispatch();
  const { listCategory } = useSelector((state) => state.category);
  const { listBrand } = useSelector((state) => state.brand);
  const [listCart, setListCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    dispatch(getListCate(0));
    dispatch(
      getListBrand({
        query: "",
        page: 0,
      })
    );
  }, [dispatch]);
  const navigate = useNavigate();

  useEffect(() => {
    setListCart(JSON.parse(localStorage.getItem("cartItems")));
  }, [listCart]);
  return (
    <div className="dashborad-client">
      <div className="main">
        <div className="header">
          <img src={logo} alt="" />

          <div className="icons">
            <Badge count={listCart?.length}>
              <ShoppingCartOutlined
                onClick={() => navigate("/shop-product/cart-pge")}
                style={{ fontSize: "25px" }}
              />
            </Badge>
            <UserOutlined />
          </div>
        </div>
        {/* Slider */}
        <div className="bannerProducts"></div>
        <div className="shop-main">
          <div className="shop-content row container">
            <div className="shop-sidebar col-2">
              <div className="sidebar-content">
                <h2>Categories</h2>
                <p
                  className="category-name"
                  onClick={() =>
                    navigate(`/shop-product/name=&categoryId=&brandId=&page=0`)
                  }
                >
                  All
                </p>
                {listCategory?.map((i) => (
                  <p
                    className="category-name"
                    onClick={() =>
                      navigate(
                        `/shop-product/name=&categoryId=${i.id}&brandId=&page=0`
                      )
                    }
                  >
                    {i.name}
                  </p>
                ))}
              </div>
              <div className="sidebar-content">
                <h2>Brand</h2>
                <p
                  className="category-name"
                  onClick={() =>
                    navigate(`/shop-product/name=&categoryId=&brandId=&page=0`)
                  }
                >
                  All
                </p>
                {listBrand?.map((i) => (
                  <p
                    className="category-name"
                    onClick={() =>
                      navigate(
                        `/shop-product/name=&categoryId=&brandId=${i.id}&page=0`
                      )
                    }
                  >
                    {i.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbordClient;
