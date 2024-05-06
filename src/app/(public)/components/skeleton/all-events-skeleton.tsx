export default function AllEventsSkeleton() {
  return (
    <>
      {/* Header */}
      <section className="w-full py-2 md:py-6 animate-pulse">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="h-6 w-36 rounded-md bg-slate-700 dark:bg-slate-50"></div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="relative">
                <div className="w-full h-10 pl-10 pr-4 py-2 rounded-md bg-slate-700 dark:bg-slate-50" />
              </div>
              <div className="relative">
                <div className="w-full h-10 pl-10 pr-4 py-2 rounded-md bg-slate-700 dark:bg-slate-50"></div>
              </div>
              <div className="relative">
                <div className="w-full h-10 pl-10 pr-4 py-2 rounded-md bg-slate-700 dark:bg-slate-50"></div>
              </div>
              <div className="relative">
                <div className="w-full h-10 pl-10 pr-4 py-2 rounded-md bg-slate-700 dark:bg-slate-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards  */}
      <section className="w-full py-2 md:py-8 animate-pulse">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* card */}
              <div className="relative rounded-xl overflow-hidden border shadow-sm ">
                <div className="h-60 overflow-hidden bg-slate-700 dark:bg-slate-50"></div>
                <div className="p-4 flex flex-col justify-between">
                  <div className="flex flex-col ">
                    <div className="flex mb-2 md:gap-8 h-6 items-center justify-between px-2 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="mt-2 px-2 mb-1 h-6 w-11/12 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="text-sm px-2 h-6 w-24 bg-slate-700 dark:bg-slate-50"></div>
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* card */}
              <div className="relative rounded-xl overflow-hidden border shadow-sm ">
                <div className="h-60 overflow-hidden bg-slate-700 dark:bg-slate-50"></div>
                <div className="p-4 flex flex-col justify-between">
                  <div className="flex flex-col ">
                    <div className="flex mb-2 md:gap-8 h-6 items-center justify-between px-2 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="mt-2 px-2 mb-1 h-6 w-11/12 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="text-sm px-2 h-6 w-24 bg-slate-700 dark:bg-slate-50"></div>
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* card */}
              <div className="relative rounded-xl overflow-hidden border shadow-sm ">
                <div className="h-60 overflow-hidden bg-slate-700 dark:bg-slate-50"></div>
                <div className="p-4 flex flex-col justify-between">
                  <div className="flex flex-col ">
                    <div className="flex mb-2 md:gap-8 h-6 items-center justify-between px-2 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="mt-2 px-2 mb-1 h-6 w-11/12 bg-slate-700 dark:bg-slate-50"></div>
                    <div className="text-sm px-2 h-6 w-24 bg-slate-700 dark:bg-slate-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pagination */}
      <div className="w-full py-10 animate-pulse">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-slate-700 dark:bg-slate-50 rounded-md"></div>
              <div className="w-12 h-8 bg-slate-700 dark:bg-slate-50 rounded-md"></div>
              <div className="w-12 h-8 bg-slate-700 dark:bg-slate-50 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
