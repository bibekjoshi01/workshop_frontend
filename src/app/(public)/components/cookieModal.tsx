import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookieModal() {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-end justify-center px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full bg-white rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <div className="p-6 relative">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">We value your privacy</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This website uses cookies in order to offer you the most
                relevant information. Please accept cookies for optimal
                performance. Read our
                <Link className="underline" href="#">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Reject All</Button>
              <Button>Accept All</Button>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Button className="rounded-full" size="icon" variant="ghost">
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
