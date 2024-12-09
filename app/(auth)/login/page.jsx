"use client";

import React, { useState } from "react";
import AuthCard from "../../../components/AuthCard";
import AuthInput from "../../../components/AuthInput";
import AuthButton from "../../../components/AuthButton";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Implement your API call logic here
      console.log({ email, password });
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Login">
      <AuthInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <AuthInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <AuthButton text="Login" onClick={handleLogin} isLoading={loading} />
      <p className="mt-4 text-sm text-gray-600 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-indigo-600 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
};

export default Login;
