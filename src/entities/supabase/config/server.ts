import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../index";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
