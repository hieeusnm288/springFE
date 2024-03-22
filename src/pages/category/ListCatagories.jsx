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
} from "antd";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getListCate } from "../../redux/slice/categorySlice";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard";
function ListCatagories() {
  // const onDelete = (cate) => {
  //   console.log(cate);
  // };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryDetail, setCategoryDeatil] = useState();
  const dispatch = useDispatch();
  const { listCategory, totalElements } = useSelector(
    (state) => state.category
  );
  useEffect(() => {
    dispatch(getListCate(0));
  }, [dispatch]);
  const navigate = useNavigate();
  // console.log(listCategory);
  const showModal = (cate) => {
    setIsModalOpen(true);
    setCategoryDeatil(cate);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(deleteCategory(categoryDetail?.id)).then((res) => {
      if (res.payload) {
        notification.open({
          message: "Thành công!",
          description: "Dữ liệu đã được cập nhật",
          type: "success",
        });
        dispatch(getListCate(0));
      }
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (cate) => {
    // console.log(cate);
    navigate(`/category/add/${cate.id}`);
  };

  const conChangePage = (page) => {
    dispatch(getListCate(page - 1));
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        <Tag
          color={record.status === "Visible" ? "green" : "red"}
          key={record.status}
        >
          {record.status === "Visible" ? "Visible" : "Invisible"}
        </Tag>
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
    <Dashboard>
      <h3>List Category</h3>
      <Table columns={columns} dataSource={listCategory} pagination={false} />
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
          Bạn có muốn xóa Category: {categoryDetail ? categoryDetail.name : ""}
        </p>
      </Modal>
    </Dashboard>
  );
}

export default withRouter(ListCatagories);
