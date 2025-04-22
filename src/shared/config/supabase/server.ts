import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./supabase-client";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
