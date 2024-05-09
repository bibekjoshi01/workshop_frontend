
export default function EventSkeleton() {
  return (
    <>
      <div className="animate-pulse container mx-auto flex flex-col items-center space-y-8 px-4 py-6 md:px-6 md:py-12 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-8 mb-">
        <div className="flex  flex-col space-y-4 w-full max-w-3xl ">
          <div className="h-[300px] bg-slate-200 dark:bg-slate-50 rounded-md"></div>
          <div className="bg-white p-4 rounded-b-lg shadow md:rounded-b-none md:rounded-r-lg">
            <div className="h-10 w-11/12 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
            <div className="h-10 w-9/12 bg-slate-200 dark:bg-slate-50 rounded-md my-2"></div>

            <div className="h-10 w-7/12 bg-slate-200 dark:bg-slate-50 rounded-md my-2"></div>

            <div className="h-20 bg-slate-200 dark:bg-slate-50 rounded-md py-2"></div>
            <div className="flex gap-4  pt-2">
              <div className="h-10 w-20 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
              <div className="h-10 w-20 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
            </div>
            <div className="pt-8 space-y-2">
              <div className="h-10 w-20 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
              <div className="h-10  bg-slate-200 dark:bg-slate-50 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start space-y-4 w-full  lg:max-w-xs">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="h-10 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
            <div className=" mt-4 mb-2 p-6 h-16 w-32 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="h-10 bg-slate-200 dark:bg-slate-50 rounded-md"></div>

            <div className=" mt-4 h-32 bg-slate-200 dark:bg-slate-50 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
}
