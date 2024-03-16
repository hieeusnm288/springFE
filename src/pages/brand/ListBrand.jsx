import React, { useEffect, useState } from "react";
import withRouter from "../../helpers/withRouter";
import { LeftOutlined } from "@ant-design/icons";
import {
  Button,
  Space,
  Table,
  Modal,
  Pagination,
  notification,
  Image,
} from "antd";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, getListBrand } from "../../redux/slice/brandSlice";
import { useNavigate } from "react-router-dom";

function ListBrand() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brandDetail, setBrandDetail] = useState();
  const dispatch = useDispatch();
  const { listBrand, totalElements } = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(getListBrand(0));
  }, [dispatch]);
  const navigate = useNavigate();
  // console.log(listCategory);
  const showModal = (brand) => {
    setIsModalOpen(true);
    setBrandDetail(brand);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(deleteBrand(brandDetail?.id)).then((res) => {
      if (res.payload) {
        notification.open({
          message: "Thành công!",
          description: "Dữ liệu đã được cập nhật",
          type: "success",
        });
        dispatch(getListBrand(0));
      }
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (brand) => {
    console.log(brand);
    navigate(`/brand/add/${brand.id}`);
  };

  const conChangePage = (page) => {
    dispatch(getListBrand(page - 1));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 900,
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (_, record) => (
        <Image
          src={`http://localhost:8080/api/v1/brand/logo/${record.logo}`}
          width={50}
        />
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
      <Table columns={columns} dataSource={listBrand} pagination={false} />
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
        <p>Bạn có muốn xóa Brand: {brandDetail ? brandDetail.name : ""}</p>
      </Modal>
    </div>
  );
}

export default ListBrand;
