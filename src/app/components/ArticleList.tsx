import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280/300"
            alt="random image"
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className="text-blue-700 pb-4 font-bold">Technology</Link>
          <Link href="#" className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4">Learning Next.js</Link>
          <p className='text-sm pb-3 text-slate-900'>published on 2025/02/22</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a expedita magni ullam rerum, deleniti tempore eos soluta. Sit, dolor optio quos quam maiores praesentium! Tempore tenetur obcaecati rerum voluptates.
          </Link>
          <Link href="#" className='text-pink-900 hover:text-black'>read more</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList