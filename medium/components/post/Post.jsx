import React from "react";
import MainArticle from "./mainArticle/MainArticle";
import ReadersNav from "./ReadersNav";
import Recommendations from "./recommendations/Recommendations.js";

function Post() {
  return <div className="flex">

  {/* Reader's navigation */}
    <ReadersNav/>
    {/* Main article */}
    <MainArticle/>
    {/* Recommendations */}
    <Recommendations />
  </div>;
}

export default Post;
