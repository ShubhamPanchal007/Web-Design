import Image from "next/image";
import React from "react";
import dummyAuthor from "../../../public/Dummy.jpg";
import RecommendedPosts from "./RecommendedPosts";
function Recommendations() {
  return (
    <div className="w-[400px] bg-white border-l-[1px] px-7">
      <div className="sticky top-0">
        <div className="flex mt-10 flex-auto text-sm">
          <button className="bg-black text-white  flex-1 pb-2.5 pt-2 rounded-full w-full">
            Get started
          </button>
          <button className="text-green-700 ml-10 font-medium">Sign In</button>
        </div>
        <div>
          {/* Search bar */}
          <div className="relative block mt-10">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-4"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="dark-gray"
              >
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </span>
            <input
              className="w-full bg-white placeholder:font-italitc border-[1px] rounded-full py-2 pl-10 pr-4 focus:outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        {/* About Author */}
        <div className="mt-9 justify-start">
          <div>
            <Image
              src={dummyAuthor}
              width={100}
              height={100}
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <div className="font-semibold mt-1">Steven C. Hayes</div>
          <div className="text-gray-500">168 followers</div>
          <div className="mt-4 text-gray-500 text-sm font-medium">
            Frontend Engineer with 5+ years of experience | Writing about React,
            Svelte, Javascript and FE
          </div>
          <div className="flex space-x-2 text-white items-center mt-5">
            <buttons className="bg-green-700 px-4 py-1.5 rounded-full  cursor-pointer">
              Follow
            </buttons>
            <buttons className="bg-green-700 rounded-full cursor-pointer">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                stroke="white"
              >
                <rect
                  x="26.25"
                  y="9.25"
                  width="0.5"
                  height="6.5"
                  rx="0.25"
                ></rect>
                <rect
                  x="29.75"
                  y="12.25"
                  width="0.5"
                  height="6.5"
                  rx="0.25"
                  transform="rotate(90 29.75 12.25)"
                ></rect>
                <path d="M19.5 12.5h-7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5"></path>
                <path d="M11.5 14.5L19 20l4-3"></path>
              </svg>
            </buttons>
          </div>
        </div>
        {/* More from medium */}
        <p className="mt-8 mb-6">More from medium</p>
        <div>
          <RecommendedPosts />
          <RecommendedPosts />
          <RecommendedPosts />
          <RecommendedPosts />
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
