import { createClient } from "@supabase/supabase-js"
import { Database } from "@/lib/database.types"

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:54321"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export { supabase }
