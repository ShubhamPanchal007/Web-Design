import React from "react";
import MainArticle from "./MainArticle/MainArticle";
import ReadersNav from "./ReadersNav";
import Recommendations from "./recommendations";

function Post() {
  return <div className="flex">

  {/* Reader's navigation */}
    <ReadersNav/>
    {/* Main article */}
    <MainArticle/>
    {/* Recommendations */}
    <Recommendations/>
  </div>;
}

export default Post;
