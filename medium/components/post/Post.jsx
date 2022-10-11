import React from "react";
import MainArticle from "./MainArticle";
import ReadersNav from "./ReadersNav";
import Recommendations from "./recommendations";

function Post() {
  return <section className="grid grid-flow-col h-screen">

  {/* Reader's navigation */}
    <ReadersNav/>
    {/* Main article */}
    <MainArticle/>
    {/* Recommendations */}
    <Recommendations/>
  </section>;
}

export default Post;
