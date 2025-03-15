import { notFound } from "next/navigation";
import { Article } from "./types";

export const getALLArticles = async (): Promise<Article[]> => {
  const response = await fetch("http://localhost:8000/posts", {
    cache: "no-store" // Server Side Rendering (SSR)
    // "force-cache" for Static Side Generator (SSG)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch articles.");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000 /* milliseconds */));

  const articles = await response.json();
  return articles;
};

export const getArticleDetail = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:8000/posts/${id}`, {
    next: { revalidate: 60 /* seconds */ }, // ISR
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch the article.");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000 /* milliseconds */));

  const article = await response.json();
  return article;
};

export const createArticle = async (
    id: string,
    title: string,
    content: string
): Promise<Article> => {

  const currentDateTime = new Date().toISOString();

  const response = await fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      title: title,
      content: content,
      dateeee: currentDateTime
    })
  });

  if (!response.ok) {
    throw new Error("Failed to create an article.");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000 /* milliseconds */));

  const newArticle = await response.json();
  return newArticle;
}
