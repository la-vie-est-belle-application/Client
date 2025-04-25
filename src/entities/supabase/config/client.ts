import { createBrowserClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "@entities/supabase";

export function createClient() {
  return createBrowserClient(supabaseUrl!, supabaseKey!);
}
