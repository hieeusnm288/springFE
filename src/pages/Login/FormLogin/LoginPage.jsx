import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./loginstyle.scss";
function LoginPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();

  const onClickRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login">
      <section className="container">
        <div className="login-box">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <h2>Member Login</h2>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
          <div className="register-now" onClick={onClickRegister}>
            Register Now
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
