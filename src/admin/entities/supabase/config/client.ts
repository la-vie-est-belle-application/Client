import { createBrowserClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "@admin/entities/supabase";

export function createClient() {
  return createBrowserClient(supabaseUrl!, supabaseKey!);
}
