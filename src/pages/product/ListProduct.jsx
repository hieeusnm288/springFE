import React, { useEffect, useState } from "react";
import withRouter from "../../helpers/withRouter";
import {
  Button,
  Space,
  Table,
  Tag,
  Modal,
  Pagination,
  notification,
  Image,
} from "antd";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getListProduct } from "../../redux/slice/productSlice";
import { useNavigate } from "react-router-dom";

function ListProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetail, setProductDetail] = useState();
  const dispatch = useDispatch();
  const { ListProduct, totalElements } = useSelector((state) => state.product);
  const [search, setSearch] = useState({
    name: "",
    categoryId: "",
    brandId: "",
    page: 0,
  });
  useEffect(() => {
    dispatch(getListProduct(search));
  }, [dispatch]);
  const navigate = useNavigate();
  const showModal = (product) => {
    setIsModalOpen(true);
    setProductDetail(product);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(deleteProduct(productDetail?.id)).then((res) => {
      if (res.payload) {
        notification.open({
          message: "Thành công!",
          description: "Dữ liệu đã được cập nhật",
          type: "success",
        });
        dispatch(
          getListProduct({
            name: "",
            categoryId: "",
            brandId: "",
            page: 0,
          })
        );
      }
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (product) => {
    // console.log(cate);
    navigate(`/product/add/${product.id}`);
  };

  const conChangePage = (page) => {
    dispatch(
      getListProduct({
        name: search.name,
        categoryId: search.categoryId,
        brandId: search.brandId,
        page: page - 1,
      })
    );
  };

  const handleRowClick = (record) => {
    // Handle row click logic here
    console.log("Clicked row:", record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      render: (val, record, index) => <>{index + 1}</>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 500,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 300,
      render: (val, record, index) => (
        <>{record.price.toLocaleString("vi-VN")}</>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      width: 100,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 300,
      render: (val, record, index) => <>{record.category.name}</>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 300,
      render: (val, record, index) => <>{record.brand.name}</>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <Image
          src={`https://springbe-production.up.railway.app/api/v1/product/image/${record.image}`}
          width={50}
        />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 300,
      render: (val, record, index) => (
        <>{record.status === 1 ? "Đang Bán" : "Ngừng Bán"}</>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleEdit(record)}
            type="primary"
            icon={<MdModeEditOutline />}
          >
            Edit
          </Button>
          <Button
            onClick={() => showModal(record)}
            type="primary"
            danger="true"
            icon={<MdDelete />}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <p>List Product</p>
      <Table
        columns={columns}
        dataSource={ListProduct}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        style={{ cursor: "pointer" }}
      />
      <Pagination
        total={totalElements}
        onChange={conChangePage}
        style={{ float: "right", marginTop: "20px" }}
      />
      <Modal
        title="Delete Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Bạn có muốn xóa Sản phẩm: {productDetail ? productDetail.name : ""}
        </p>
      </Modal>
    </div>
  );
}

export default ListProduct;
