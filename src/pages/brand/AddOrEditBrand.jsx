import { Button, Form, Input, Select, Space, Upload, notification } from "antd";
import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import {
  getDetailBrand,
  updateBrand,
  insertBrand,
} from "../../redux/slice/brandSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { useEffect } from "react";

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
function AddOrEditBrand() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const onFinish = (values) => {
    console.log(values);
    // if (id) {
    //   form.validateFields().then((values) => {
    //     dispatch(
    //       updateBrand({
    //         name: values.name,
    //         id: id,
    //         status: values.status,
    //       })
    //     ).then((res) => {
    //       if (res.payload) {
    //         notification.open({
    //           message: "Thành công!",
    //           description: "Dữ liệu đã được cập nhật",
    //           type: "success",
    //         });
    //         navigate("/categories");
    //       }
    //     });
    //   });
    // } else {
    //   dispatch(insertBrand(values)).then((res) => {
    //     if (res.payload) {
    //       notification.open({
    //         message: "Thành công!",
    //         description: "Dữ liệu đã được cập nhật",
    //         type: "success",
    //       });
    //       navigate("/categories");
    //     }
    //   });
    // }
  };
  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (id) {
      dispatch(getDetailBrand(id)).then((res) => {
        if (id) {
          form.setFieldsValue({
            name: res.payload.name,
            status: 0,
          });
        }
      });
    } else {
      form.setFieldsValue({
        name: "",
        status: 0,
      });
    }
  }, [id]);
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    console.log(e);
    return e?.fileList;
  };
  // console.log(id);

  return (
    <div>
      <h3>
        <LeftOutlined /> Add Category
      </h3>
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
            label="Brand Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
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

export default withRouter(AddOrEditBrand);
