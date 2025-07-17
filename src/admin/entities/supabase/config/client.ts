import { supabaseKey, supabaseUrl } from "@admin/entities/supabase";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(supabaseUrl!, supabaseKey!);
}
