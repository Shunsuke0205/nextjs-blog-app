import { supabase } from "@/utils/spabaseCliants";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return response.status(500).json({ error: error.message });
  }
  
  return response.status(200).json(data);
}