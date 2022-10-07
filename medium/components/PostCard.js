import React from "react";
import Image from "next/image";
import authorImage from "../public/Medium.png";
import mainImage from "../public/mainImage.jpg";
function PostCard() {
  return (
    <div className="flex justify-between ml-28 mt-14 max-w-3xl items-center">
      <div>
        {/* Author's section */}
        <div className="flex items-center space-x-2">
          <Image
            className={"rounded-full object-contain"}
            src={authorImage}
            height={30}
            width={30}
          />
          <p className={"font-bold"}>Shubham Panchal</p>
        </div>

        {/* Article details */}
        <div className="mb-5">
          {/* ArticleName */}
          <p className={"text-2xl font-bold"}>
          10 books of swami vivekananda everyone must read
          </p>
          {/* DescriptionPreview */}
          <p className={"text-sm text-gray-500 font-medium"}>
            Mind always seeks happiness it grows in the direction where...
          </p>
        </div>
        <div className="flex space-x-1 text-sm text-gray-600 items-center">
          <p>Oct 7</p>
          <span>•</span>
          <p>9 min read</p>
          <span>•</span>
          <p className="bg-gray-200 px-2 rounded-md">Productivity</p>
        </div>
      </div>

      {/* Article's main image */}
      <div>
        <Image className={"object-contain relative"} src={mainImage} height={150} width={150} />
      </div>
    </div>
  );
}

export default PostCard;
