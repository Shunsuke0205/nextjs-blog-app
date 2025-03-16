import { supabase } from "@/utils/spabaseCliants";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";


export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return response.status(500).json({ error: error.message });
  }
  
  if (!data) {
    notFound();
  }
  
  return response.status(200).json(data);
}