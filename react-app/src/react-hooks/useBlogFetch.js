import { useEffect, useState } from "react";

import debounce from "../utils/debounce";

// TODO add tests to validate functionality
function useBlogFetch(uriParam) {
  const [article, setArticle] = useState(undefined);
  const [err, setErr] = useState(undefined);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const endpoint =
          "http://localhost:8000/wp-json/wp/v2/posts/" + uriParam;

        const res = await fetch(endpoint)
          .then((res) => res.json())
          .catch((err) => {
            throw new Error(err);
          });
        setArticle(res);
      } catch (err) {
        setErr(err);
      } finally {
        setLoadingState(false);
      }
    };
    debounce(asyncFetch, 100)();
  }, [uriParam]);
  return {
    isLoading,
    post: article,
    err,
  };
}

export default useBlogFetch;
