import React, { MouseEventHandler } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { LoginForm } from "./form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div className="mx-auto my-16 max-w-[500px] space-y-6 py-16  px-16 border rounded-3xl">
      <div className="space-y-2 py-4 text-center">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Login to your account to continue
        </p>
      </div>
      <LoginForm />
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-10">
        By clicking Continue, you agree to {"Workshopify's "}
        <Link
          className="underline underline-offset-2 leading-4 text-blue-600 hover:text-gray-900 dark:hover:text-gray-50"
          href="#"
        >
          User Agreement, Privacy Policy, and Cookie Policy
        </Link>
        .
      </p>
      {/* <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link className="underline" href="#">
          Login
        </Link>
      </div> */}
    </div>
  );
}
