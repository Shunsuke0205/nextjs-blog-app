import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://picsum.photos/800"
            alt="elephant"
            width={1280}
            height={720}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Learning Next.js</Link>
          <p>By Shunsuke, published on 2025/02/22</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a expedita magni ullam rerum, deleniti tempore eos soluta. Sit, dolor optio quos quam maiores praesentium! Tempore tenetur obcaecati rerum voluptates.
          </Link>
          <Link href="#">read more</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList