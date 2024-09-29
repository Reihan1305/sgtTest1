"use client";

import { useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  interface login {
    username: string;
    password: string;
  }

  const handleSubmit = async (values: login) => {
    setLoading(true);
    alert(`Login values:
        name:${values.username}
        password:${values.password}`);
    router.push("/dashboard");
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "1rem" }}>Login</h2>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Link href="/auth/register">Don t have an account? Register here</Link>
    </div>
  );
};

export default LoginPage;
