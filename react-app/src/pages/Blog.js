import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";

const BlogLayout = () => {
  const param = useParams();
  const [article, setArticle] = useState(undefined);
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const endpoint =
          "http://localhost:8000/wp-json/wp/v2/posts/" + param.id;

        const res = await fetch(endpoint)
          .then((res) => res.json())
          .catch((err) => {
            throw new Error(err);
          });
        console.log(res);
        setArticle(res);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("done");
      }
    };
    asyncFetch();
  }, [param]);

  const ToRender = article ? (
    <>
      <h1>{article.title.rendered}</h1>
      <p>{article.date}</p>
      <section
        className="blog--content"
        dangerouslySetInnerHTML={{ __html: article.content.rendered }}
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
