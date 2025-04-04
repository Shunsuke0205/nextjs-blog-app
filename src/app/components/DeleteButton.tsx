"use client";

// import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react"

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    // await deleteArticle(id);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    })

    router.push("/");
    router.refresh();
  }
  return (
    <div
      className="bg-red-500 hover:bg-red-700 rounded-md py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      Delete
    </div>
  )
}

export default DeleteButton