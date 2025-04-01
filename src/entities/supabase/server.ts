import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from ".";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
