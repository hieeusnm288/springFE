import React, { useEffect, useState } from "react";
import withRouter from "../../helpers/withRouter";
import {
  Button,
  Space,
  Table,
  Modal,
  Pagination,
  notification,
  Image,
  Form,
  Input,
  Row,
  Col,
  Upload,
} from "antd";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getListBrand,
  updateBrand,
} from "../../redux/slice/brandSlice";

import { PlusOutlined } from "@ant-design/icons";

function ListBrand() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [brandDetail, setBrandDetail] = useState();
  const dispatch = useDispatch();
  const { listBrand, totalElements } = useSelector((state) => state.brand);
  const [key, setKey] = useState({
    query: "",
    page: 0,
  });

  useEffect(() => {
    dispatch(getListBrand(key));
  }, [key, dispatch]);

  // console.log(listCategory);
  const showModal = (brand) => {
    setIsModalOpen(true);
    setBrandDetail(brand);
  };
  const [nameSreach, setNameSearch] = useState("");
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(deleteBrand(brandDetail?.id)).then((res) => {
      if (res.payload) {
        notification.open({
          message: "Thành công!",
          description: "Dữ liệu đã được cập nhật",
          type: "success",
        });
        setKey({
          query: "",
          page: 0,
        });
        dispatch(getListBrand(key));
      }
    });
  };
  const handleOkUpdate = () => {
    setIsModalUpdateOpen(false);
    form.validateFields().then((values) => {
      console.log(values.logoFile);
      dispatch(
        updateBrand({
          id: values.id,
          name: values.name,
          logoFile: values.logoFile,
        })
      ).then((res) => {
        if (res.payload) {
          notification.open({
            message: "Thành công!",
            description: "Dữ liệu đã được cập nhật",
            type: "success",
          });
          setKey({
            query: "",
            page: 0,
          });
          dispatch(getListBrand(key));
        }
      });
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelUpdate = () => {
    setIsModalUpdateOpen(false);
  };

  const handleEdit = (brand) => {
    setIsModalUpdateOpen(true);
    setBrandDetail(brand);
  };

  const conChangePage = (page) => {
    dispatch(getListBrand(key.query, page - 1));
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
          src={`https://springbe-production.up.railway.app/api/v1/brand/logo/${record.logo}`}
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
  const [form] = Form.useForm();
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      return [e.fileList[1]];
    }
    return e && e.fileList;
  };
  const onChangName = (e) => {
    setNameSearch(e.target.value);
  };
  const onSearch = () => {
    dispatch(
      getListBrand({
        query: nameSreach,
        page: 0,
      })
    );
  };
  return (
    <div>
      <label className="mb-1">Tìm kiếm Brand: </label>
      <Row gutter={16} className="mb-5">
        <Col span={22}>
          <Input onChange={onChangName} />
        </Col>
        <Col>
          <Button onClick={onSearch}>Search</Button>
        </Col>
      </Row>
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
      <Modal
        title="Update"
        open={isModalUpdateOpen}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
      >
        <Form
          form={form}
          name="control-hooks"
          // onFinish={onFinish}
          style={{
            maxWidth: 800,
            marginTop: "20px",
          }}
        >
          <Form.Item
            name="id"
            label="Brand Id"
            initialValue={brandDetail ? brandDetail.id : ""}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="name"
            label="Brand Name"
            initialValue={brandDetail ? brandDetail.name : ""}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Upload Logo"
            name="logoFile"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue={[
              {
                url: brandDetail
                  ? `https://springbe-production.up.railway.app/api/v1/brand/logo/${brandDetail.logo}`
                  : "",
              },
            ]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              listType="picture-card"
              accept=".jpg,.png,.gif"
              maxCount={1}
              beforeUpload={() => false}
            >
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Space>
              {/* <Button type="primary" htmlType="submit">
                Submit
              </Button> */}
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default withRouter(ListBrand);
