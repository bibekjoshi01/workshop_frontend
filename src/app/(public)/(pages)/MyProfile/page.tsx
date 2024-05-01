import { Metadata } from "next";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FcCamera } from "react-icons/fc";
import ProfileTabs from "../../components/tabs/profileTabs";

export const metadata: Metadata = {
  title: "My Profile",
};
export default function MyProfile() {
  return (
    <>
      {/* cover image */}
      <div className="container mx-auto px-0 border md:h-[60vh] h-[20rem] rounded-b-xl">
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
      <div className="container border-b relative mx-auto pb-16 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10 ">
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

      {/* FIXME Profile tabs starts here */}

      <ProfileTabs />

      {/* users details starts here */}
      {/* <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 flex-1 justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 py-6 ">
          <div className="space-y-1 border p-6 rounded-3xl hover:border-gray-300">
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2 py-4">
              <Badge variant="secondary" className="py-3 px-4 ">
                React
              </Badge>
              <Badge variant="secondary" className="py-3 px-4 ">
                Next.js
              </Badge>
              <Badge variant="secondary" className="py-3 px-4 ">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="py-3 px-4 ">
                Tailwind CSS
              </Badge>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Education</h3>
            <div className="space-y-1">
              <p className="text-sm">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                University of California, Berkeley
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 border rounded-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-medium">Software Engineer</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Acme Inc. | 2019 - Present
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Intern</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Globex Corp. | 2018 - 2019
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-medium">
                  AWS Certified Solutions Architect - Associate
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued May 2021 | Expires May 2024
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Google Cloud Certified Professional Cloud Architect
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued November 2020 | Expires November 2023
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-medium">
                  Acme Inc. Hackathon Winner
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Awarded June 2021
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Globex Corp. Employee of the Month
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Awarded September 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16 border rounded-lg">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hobbies</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-medium">Photography</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I enjoy capturing the beauty of the world through my camera
                  lens.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Hiking</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Exploring the great outdoors and connecting with nature is a
                  passion of mine.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Reading</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {`I love immersing myself in a good book, whether it's fiction
                  or non-fiction.`}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Image
                  alt="Recommendation Avatar"
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src="/userImage.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">Jane Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`"Jared is an exceptional software engineer. I had the
                    pleasure of working with him on a project, and his technical
                    skills, attention to detail, and problem-solving abilities
                    were outstanding."`}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  alt="Recommendation Avatar"
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src="/userImage.png"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">John Smith</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`I've known Jared for several years, and he's always been a
                    reliable and dedicated professional. His commitment to
                    excellence and his ability to deliver high-quality work make
                    him a valuable asset to any team.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

function GithubIcon(props: any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
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

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
