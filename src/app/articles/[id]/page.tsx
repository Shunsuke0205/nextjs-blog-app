import React from "react"
import Image from "next/image"
// import { getArticleDetail } from '@/blogAPI';
import DeleteButton from "@/app/components/DeleteButton";
import { hash } from "@/utils/hash";

const Article = async ({ params }: {params: {id: string} }) => {

  // const articleDetail = await getArticleDetail(params.id);

  const { id } = await params;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${API_URL}/api/${id}`, {
    method: "GET",
    next: { revalidate: 60 /* seconds */ }, // ISR
  })

  const articleDetail = await response.json();
  console.log(articleDetail);
  
  const photoId = hash(id) % 1000 + 1;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/id/${photoId}/1280/300`}
        alt="random image"
        width={1280}
        height={300}
      />
      <h1 className="text-4xl my-10">
        {articleDetail.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>
          {articleDetail.content}
        </p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={articleDetail.id} />
      </div>
    </div>
  )
}

export default Article