"use client";

import React, { useState } from "react";
import AuthCard from "../../../components/AuthCard";
import AuthInput from "../../../components/AuthInput";
import AuthButton from "../../../components/AuthButton";
import Link from "next/link";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      // Implement your API call logic here
      console.log({ name, email, password });
    } catch (error) {
      console.error("Signup failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Sign Up">
      <AuthInput
        label="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
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
        placeholder="Create a password"
      />
      <AuthButton text="Sign Up" onClick={handleSignup} isLoading={loading} />
      <p className="mt-4 text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </AuthCard>
  );
};

export default Signup;
