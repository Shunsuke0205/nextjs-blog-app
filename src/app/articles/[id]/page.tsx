import React from 'react'
import Image from 'next/image'
import { getArticleDetail } from '@/blogAPI';

const Article = async ({ params }: {params: {id: string} }) => {

  const articleDetail = await getArticleDetail(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://picsum.photos/id/${9 + parseInt(params.id)}/1280/300`}
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
    </div>
  )
}

export default Article