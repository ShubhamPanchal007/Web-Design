import React from "react";

function Banner() {
  return (
    <div className="bg-[#FCC017] border-y border-black pt-20 pb-32 space-y-8 px-24 font-serif">
      <h1 className="text-8xl">Stay curious.</h1>
      <h3 className="text-2xl text-gray-800">
        Discover stories, thinking, and expertise from writers on any topic.
      </h3>
      <button className="bg-black text-white text-xl font-medium px-14 py-2.5 rounded-full">
            Start reading    
      </button>
    </div>
  );
}

export default Banner;
