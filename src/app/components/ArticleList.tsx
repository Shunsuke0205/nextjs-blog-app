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
      </article>
    </div>
  )
}

export default ArticleList