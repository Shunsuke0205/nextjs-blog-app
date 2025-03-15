"use client";

import { createArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react"

const CreateBlogPage = () => {

  const router = useRouter();

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    await createArticle(id, title, content);
    setLoading(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>Post new blog</h2>

      <form className='bg-slate-100 rounded shadow-lg p-6 mb-6' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='text-gray-800 text-sm font-bold mb-2'>URL</label>
          <input 
            type="text"
            className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none'
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-800 text-sm font-bold mb-2'>Title</label>
          <input
            type="text"
            className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-800 text-sm font-bold mb-2'>Body</label>
          <textarea
            name=""
            id=""
            className='shadow border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none'
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        
        <button type='submit' className='text-gray-900 border rounded-lg py-2 px-3 bg-orange-300' >Submit</button>
      </form>
    </div>
  )
}

export default CreateBlogPage