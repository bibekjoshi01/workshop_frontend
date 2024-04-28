import Link from "next/link";

export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Smart Warehouse</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <PackageIcon className="h-4 w-4" />
                Shelving
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <WarehouseIcon className="h-4 w-4" />
                Inventory
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ShipIcon className="h-4 w-4" />
                Shipping
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <PieChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <h1 className="text-lg font-semibold">Shelving</h1>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid grid-cols-8 gap-4">
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-red-500/20 dark:bg-red-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-red-500/20 dark:bg-red-500/30" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-red-500/20 dark:bg-red-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-red-500/20 dark:bg-red-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-red-500/20 dark:bg-red-500/30" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-green-500/20 dark:bg-green-500/30" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
            <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-950">
              <div className="[grid-area:stack] grid grid-cols-3 grid-rows-3 gap-px">
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
                <div className="bg-white dark:bg-gray-900" />
              </div>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg p-4 bg-white dark:bg-gray-950">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Shelf Section Details</h2>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-white dark:bg-gray-900" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Empty
                  </span>
                  <div className="h-3 w-3 rounded-full bg-green-500/20 dark:bg-green-500/30" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Partially Empty
                  </span>
                  <div className="h-3 w-3 rounded-full bg-red-500/20 dark:bg-red-500/30" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Full
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Section
                  </span>
                  <p className="text-base font-medium">A2</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Space
                  </span>
                  <p className="text-base font-medium">75%</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Items
                  </span>
                  <p className="text-base font-medium">12</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: any) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ShipIcon(props: any) {
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
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M12 10v4" />
      <path d="M12 2v3" />
    </svg>
  );
}

function WarehouseIcon(props: any) {
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
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}
