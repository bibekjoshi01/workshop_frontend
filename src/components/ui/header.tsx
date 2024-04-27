import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <header className="w-full text-gray-900 py-4 dark:text-gray-50">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <MountainIcon className="h-6 w-6" />
            <span>Acme Tech Events</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="hover:underline" href="#">
              Register
            </Link>
            <Link className="hover:underline" href="#">
              Learn More
            </Link>
          </nav>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      
    </>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props : any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
