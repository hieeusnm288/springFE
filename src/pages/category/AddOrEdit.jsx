import React, { useEffect } from "react";
import withRouter from "../../helpers/withRouter";
import { Button, Form, Input, Select, Space, notification } from "antd";

import {
  getCategory,
  insertCategory,
  updateCategory,
} from "../../redux/slice/categorySlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AddOrEdit() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const onFinish = (values) => {
    if (id) {
      form.validateFields().then((values) => {
        dispatch(
          updateCategory({
            name: values.name,
            id: Number(id),
            status: values.status,
          })
        ).then((res) => {
          console.log(res);
          if (res.payload) {
            notification.open({
              message: "Thành công!",
              description: "Dữ liệu đã được cập nhật",
              type: "success",
            });
            navigate("/categories");
          }
        });
      });
    } else {
      dispatch(insertCategory(values)).then((res) => {
        console.log(res);
        if (res.payload) {
          notification.open({
            message: "Thành công!",
            description: "Dữ liệu đã được cập nhật",
            type: "success",
          });
          navigate("/categories");
        }
      });
    }
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (id) {
      dispatch(getCategory(id)).then((res) => {
        if (id) {
          form.setFieldsValue({
            name: res.payload.name,
            status: res.payload.status === "Invisible" ? 1 : 0,
          });
        }
      });
    } else {
      form.setFieldsValue({
        name: "",
        status: 0,
      });
    }
  }, [dispatch, form, id]);

  // console.log(id);

  return (
    <div>
      <h3>{id ? "Update Category" : " Add Category"}</h3>
      <div>
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{
            maxWidth: 800,
            marginTop: "20px",
          }}
        >
          <Form.Item
            name="name"
            label="Category Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              // onChange={onGenderChange}
              allowClear
            >
              <Option value={0}>Visible</Option>
              <Option value={1}>Invisible</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(AddOrEdit);
