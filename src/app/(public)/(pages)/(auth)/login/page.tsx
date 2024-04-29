import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignUp",
};
export default function Login() {
  return (
    <div className="mx-auto my-16 max-w-[300px] space-y-6 py-12 lg:py-24 h-96">
      <div className="space-y-2 py-4 text-center">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Login to your account to continue
        </p>
      </div>
      <div className="space-y-4">
        <Button
          className="w-full shadow-sm hover:shadow-md transition-all"
          variant="outline"
        >
          <GoogleIcon className="h-5 w-5 mr-2" />
          Log In with Google
        </Button>
      </div>
      {/* <div className="mt-4 text-center text-sm">
        Already have an account?
        <Link className="underline" href="#">
          Login
        </Link>
      </div> */}
    </div>
  );
}
function GoogleIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
        fill="#4285F4"
      ></path>
      <path
        d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
        fill="#34A853"
      ></path>
      <path
        d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
        fill="#FBBC05"
      ></path>
      <path
        d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
        fill="#EA4335"
      ></path>
    </svg>
  );
}
