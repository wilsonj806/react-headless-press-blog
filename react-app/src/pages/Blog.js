import React from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";

import useBlogFetch from "../react-hooks/useBlogFetch";

const BlogLayout = () => {
  const { id } = useParams();
  const {
    post,
    // err,
    // isLoading
  } = useBlogFetch(id);

  const ToRender = post ? (
    <>
      <h1>{post.title.rendered}</h1>
      <p>{post.date}</p>
      <section
        className="blog--content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </>
  ) : null;
  return (
    <BaseLayout>
      <article className="layout--content">{ToRender}</article>
    </BaseLayout>
  );
};

export default BlogLayout;
