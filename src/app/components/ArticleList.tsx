import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/types'

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => 
        <article className="shadow my-4" key={article.id}>
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src={`https://picsum.photos/id/${9 + parseInt(article.id)}/1280/300`}
              alt="random image"
              width={1280}
              height={300}
            />
          </Link>
          <div className='bg-white flex flex-col justify-start p-6'>
            <Link href={`articles/${article.id}`} className="text-blue-700 pb-4 font-bold">Technology</Link>
            <Link href={`articles/${article.id}`} className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4">{article.title}</Link>
            <p className='text-sm pb-3 text-slate-900'>Publish on {article.date}</p>
            <Link href={`articles/${article.id}`} className='text-slate-900 pb-6'>
              {article.content}
            </Link>
            <Link href={`articles/${article.id}`} className='text-pink-900 hover:text-black'>read more</Link>
          </div>
        </article>
      )}
    </div>
  )
}

export default ArticleList