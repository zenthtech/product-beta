"use client";

import React, { useState } from "react";
import { Button, Input, Form, Typography, message } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

const { Title, Link } = Typography;

export default function Login() {
  const [form] = Form.useForm();

  const handleEmailLogin = ({ email, password }) => {
    if (email === "admin@example.com" && password === "123456") {
      message.success("✅ Login successful!");
    } else {
      message.error("❌ Invalid email or password.");
    }
  };

  const handleForgotPassword = () => {
    const email = form.getFieldValue("email");
    if (!email) {
      message.warning("Please enter your email to reset password.");
    } else {
      message.success(`📧 Reset link sent to ${email}`);
    }
  };

  const handleGoogleLogin = () => {
    message.info("🔐 Google login simulated");
  };

  const handleGitHubLogin = () => {
    message.info("🔐 GitHub login simulated");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <Title level={3} className="text-center mb-6">
          Login
        </Title>

        <Form layout="vertical" form={form} onFinish={handleEmailLogin}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="you@example.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <Form.Item className="mb-2">
            <Button type="primary" htmlType="submit" block>
              Login with Email
            </Button>
          </Form.Item>

          <div className="text-right mb-4">
            <Link onClick={handleForgotPassword} className="text-blue-600">
              Forgot password?
            </Link>
          </div>
        </Form>

        <div className="text-center text-gray-400 my-2">OR</div>

        <div className="flex flex-col gap-3">
          <Button
            icon={<GoogleOutlined />}
            onClick={handleGoogleLogin}
            block
            className="!bg-red-500 !text-white hover:!bg-red-600"
          >
            Sign in with Google
          </Button>

          <Button
            icon={<GithubOutlined />}
            onClick={handleGitHubLogin}
            block
            className="!bg-gray-800 !text-white hover:!bg-black"
          >
            Sign in with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
