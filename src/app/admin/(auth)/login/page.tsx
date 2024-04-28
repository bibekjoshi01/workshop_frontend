import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950 ">
      <div className="mx-auto w-full max-w-md space-y-8 p-8 border-solid border rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or
            <Link
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              href="#"
            >
              &nbsp; Create in account
            </Link>
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <Label
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email address
            </Label>
            <div className="mt-1">
              <Input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="email"
                placeholder="mail@example.com"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="password"
              >
                Password
              </Label>
              <div className="text-sm">
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="mt-1">
              <Input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="password"
                name="password"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <Button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-500 dark:focus:ring-indigo-400"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
