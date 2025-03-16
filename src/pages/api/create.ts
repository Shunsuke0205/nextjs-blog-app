import { supabase } from "@/utils/spabaseCliants";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id, title, content } = request.body;

  const { data, error } = await supabase
    .from("posts")
    .insert({
      id,
      title,
      content,
      date: new Date().toISOString()
    })

  if (error) {
    return response.status(500).json({ error: error.message });
  }

  return response.status(200).json(data);
}