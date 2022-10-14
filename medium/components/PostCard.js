import React from "react";
import Image from "next/image";
import authorImage from "../public/Dummy.png";
import mainImage from "../public/mainImage.jpg";
function PostCard() {
  return (
    <div className="flex justify-between ml-24 mt-14 max-w-2xl items-center space-x-1">
      <div>
        {/* Author's section */}
        <div className="flex items-center space-x-2 mb-2">
          <Image
            className={"rounded-full object-contain"}
            src={authorImage}
            height={25}
            width={25}
          />
          <p className={"font-bold"}>Shubham Panchal</p>
        </div>

        {/* Article details */}
        <div className="mb-5 space-y-1">
          {/* ArticleName */}
          <p className={"text-2xl font-bold"}>
            10 books of swami vivekananda everyone must read
          </p>
          {/* DescriptionPreview */}
          <p className={"text-sm text-gray-700 font-medium"}>
            Mind always seeks happiness it grows in the direction where...
          </p>
        </div>
        <div className=" text-gray-600 items-center flex justify-between">
          <div className="space-x-1 text-sm">
            <span>Oct 7</span>
            <span>•</span>
            <span>9 min read</span>
            <span>•</span>
            <span className="bg-gray-200 px-2 rounded-md">Productivity</span>
          </div>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </span>
        </div>
      </div>
         

      {/* Article's main image */}
      <div>
        <Image
          className={"object-contain relative"}
          src={mainImage}
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}

export default PostCard;
