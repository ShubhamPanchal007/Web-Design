import Image from "next/image";
import React from "react";
import mainImage from "../../../public/mainImage.jpg";
import dummyAuthor from "../../../public/Dummy.jpg";
function RecommendedPosts() {
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="max-w-[250px]">
        <div className="flex space-x-2">
          <div>
            <Image
              src={dummyAuthor}
              className="rounded-full"
              height={20}
              width={20}
            />
          </div>
          <div className="text-sm">
            Steven in <span className="text-gray-800">JS mastery</span>{" "}
          </div>
        </div>
        <h2 className="line-clamp-3 font-bold ">
          Here is the next step of learning confusing parts of JavaScript like
          event loops, Web APIs, and asynchronous stuff.
        </h2>
      </div>

      <div>
        <Image src={mainImage} height={70} width={70} />
      </div>
    </div>
  );
}

export default RecommendedPosts;
