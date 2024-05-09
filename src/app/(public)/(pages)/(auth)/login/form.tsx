"use client";
import { Button } from "@/components/ui/button";
import React, { MouseEventHandler } from "react";
import { useGoogleLogin } from "@react-oauth/google";

export function LoginForm() {
  const responseGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // FIXME - This is a placeholder for the actual login logic
        console.log(tokenResponse, "token");
      } catch (error: any) {
        console.log(error?.response?.data?.detail);
      }
    },
  });
  return (
    <div className="space-y-4">
      <Button
        className="w-full shadow-sm hover:shadow-md transition-all"
        variant="outline"
        type="submit"
        onClick={responseGoogle as MouseEventHandler<HTMLButtonElement>}
      >
        <GoogleIcon className="h-5 w-5 mr-2" />
        Login with Google
      </Button>
      <Button
        className="w-full shadow-sm hover:shadow-md transition-all"
        variant="outline"
      >
        <LinkedInIcon className="h-5 w-5 mr-2" />
        Login with LinkedIn
      </Button>
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

function LinkedInIcon(props: any) {
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
        d="M20.25 0H3.75C1.677 0 0 1.677 0 3.75V20.25C0 22.323 1.677 24 3.75 24H20.25C22.323 24 24 22.323 24 20.25V3.75C24 1.677 22.323 0 20.25 0ZM7.5 20.25H4.5V9H7.5V20.25ZM6 7.5C5.1725 7.5 4.5 6.8275 4.5 6C4.5 5.1725 5.1725 4.5 6 4.5C6.8275 4.5 7.5 5.1725 7.5 6C7.5 6.8275 6.8275 7.5 6 7.5ZM21 20.25H18V14.25C18 12.75 17.25 11.25 15.75 11.25C14.25 11.25 13.5 12.75 13.5 14.25V20.25H10.5V9H13.5V10.5C14.25 9 15.75 7.5 18 7.5C21 7.5 21 10.5 21 12V20.25Z"
        fill="#0077B5"
      ></path>
    </svg>
  );
}
