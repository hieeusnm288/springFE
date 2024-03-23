import { Button, Form, Input, Space, Upload, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getDetailBrand, insertBrand } from "../../redux/slice/brandSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import withRouter from "../../helpers/withRouter";
import { useEffect, useState } from "react";

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
  const [brandDetial, setBrandDetail] = useState({
    name: "",
    logo: "",
  });

  const onFinish = (values) => {
    form.validateFields().then((values) => {
      dispatch(
        insertBrand({
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
          navigate("/listbrand");
        }
      });
    });
  };

  console.log(brandDetial);
  useEffect(() => {
    if (id) {
      dispatch(getDetailBrand(id)).then((res) => {
        if (id) {
          form.setFieldsValue({
            name: res.payload.name,
          });
          setBrandDetail({
            logo: res.payload.logo,
          });
        }
      });
    } else {
      form.setFieldsValue({
        name: "",
      });
    }
  }, [id, form, dispatch]);
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length > 1) {
      return [e.fileList[1]];
    }
    return e && e.fileList;
  };
  // console.log(id);

  return (
    <div>
      {/* <h3>{id ? "Update Brand" : "Add Brand"}</h3> */}
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
            label="Upload Logo"
            name="logoFile"
            rules={[
              {
                required: true,
              },
            ]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              // action="/upload.do"
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
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(AddOrEditBrand);
