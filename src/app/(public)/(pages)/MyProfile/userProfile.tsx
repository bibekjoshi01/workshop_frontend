import Image from "next/image";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FcCamera } from "react-icons/fc";

export default function UserProfile() {
  return (
    <>
      <div className="container mx-auto px-0  md:h-[60vh] h-[20rem] ">
        <Image
          alt="User Cover Image"
          className="h-full w-full object-cover rounded-b-xl"
          height={180}
          src="/userCoverImage.png"
          style={{
            objectFit: "cover",
          }}
          width={180}
        />
      </div>
      <div className="container relative mx-auto pb-16 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10 ">
        {/* user image */}
        <div className="absolute h-[140px] w-[140px] md:h-[180px]  md:w-[180px] -top-16">
          <Image
            alt="User Avatar"
            className="h-full w-full rounded-full object-cover"
            height={180}
            src="/userImage.png"
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width={180}
          />
          {/* camera icon in profile pic */}
          <div className="z-10 p-2 bg-gray-300 transition-all cursor-pointer absolute bottom-4 right-0 h-10 w-10 rounded-full text-white flex items-center justify-center  dark:text-gray-900">
            <FcCamera className="text-3xl" />
          </div>
          {/* animation ping */}
          <div className="cursor-pointer absolute left-1 top-10 h-4 w-4 rounded-full">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </div>
          </div>
        </div>
        {/* user name aside */}
        <div className="space-y-1 text-center md:text-left ml-[0px] pt-24 md:pt-10 md:ml-[200px] -md:mt-16 ">
          <h2 className="text-3xl md:text-2xl font-semibold">Manish Joshi</h2>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            {" "}
            <MdOutlineComputer className="h-4 w-4" />{" "}
            <span>Software Engineer</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPinIcon className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
        {/* buttons */}
        <div className="absolute text-xs md:text-sm bottom-2  md:bottom-20 md:right-10  ">
          <div className="flex gap-4">
            {/* TODO PUT HREF HERE  */}
            <Link
              href="#"
              className="flex items-center gap-2 text-dark  dark:text-white bg-gray-200 hover:bg-gray-300  p-2 rounded-lg"
            >
              <IoIosAdd className=" font-semibold h-6 w-6" />
              <span>Add Post</span>
            </Link>
            {/* TODO PUT HREF HERE  */}
            <Link
              href="#"
              className="flex items-center gap-2 text-dark dark:text-white bg-gray-200 hover:bg-gray-300 p-2 rounded-lg "
            >
              <MdEdit className="h-4 w-4 font-semibold" />
              <span>Edit Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function MapPinIcon(props: any) {
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
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }