import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";

const BlogLayout = () => {
  const location = useParams();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <BaseLayout>
      <article className="layout--content">Hello, this is my blog</article>
    </BaseLayout>
  );
};

export default BlogLayout;
