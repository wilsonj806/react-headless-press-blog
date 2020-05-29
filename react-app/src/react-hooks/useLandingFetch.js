import { useEffect, useState } from "react";
import debounce from "../utils/debounce";

// TODO Add testst to validate functionality
function useLandingFetch() {
  const [landingArticles, setArticles] = useState([]);
  const [err, setErr] = useState(undefined);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    const asyncFetch = async () => {
      try {
        // TODO Add placeholder block while it loads
        const api = "http://localhost:8000/wp-json/wp/v2/posts?per_page=5";
        const res = await fetch(api)
          .then((res) => res.json())
          .catch((err) => {
            throw new Error(err);
          });
        const articles = res.map(({ id, date, excerpt, link, tags, title }) => {
          return {
            id,
            date,
            excerpt,
            link,
            tags,
            title: title.rendered,
          };
        });
        setArticles(articles);
      } catch (err) {
        setErr(err);
      } finally {
        setLoadingState(false);
      }
    };
    debounce(asyncFetch, 100)();
  }, []);
  return {
    isLoading,
    articles: landingArticles,
    err,
  };
}

export default useLandingFetch;
