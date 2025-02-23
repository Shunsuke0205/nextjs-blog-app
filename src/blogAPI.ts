import { Article } from "./types";

export const getALLArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:8000/posts", {
    cache: "no-store" // Server Side Rendering (SSR)
    // "force-cache" for Static Side Generator (SSG)
  })

  const articles = await response.json();
  return articles;
};