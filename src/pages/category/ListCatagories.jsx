import React, { useState } from "react";
import withRouter from "../../helpers/withRouter";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag, Modal } from "antd";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
function ListCatagories() {
  // const onDelete = (cate) => {
  //   console.log(cate);
  // };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryDetail, setCategoryDeatil] = useState();
  const showModal = (cate) => {
    setIsModalOpen(true);
    setCategoryDeatil(cate);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log(categoryDetail.id);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (cate) => {
    console.log(cate);
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
        <Tag color={record.status === 0 ? "green" : "red"} key={record.status}>
          {record.status === 0 ? "Visible" : "Invisible"}
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
  const data = [
    {
      name: "Compoter",
      id: 1,
      status: 0,
    },
    {
      name: "Phone",
      id: 2,
      status: 0,
    },
    {
      name: "Laptop",
      id: 3,
      status: 1,
    },
  ];
  return (
    <div>
      <h3>
        <LeftOutlined /> List Category
      </h3>
      <Table columns={columns} dataSource={data} pagination={false} />
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
    </div>
  );
}

export default withRouter(ListCatagories);
