import React from "react";
import { Metadata } from "next";
import { LoginForm } from "./loginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
