"use server";

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "@entities/supabase";

export default async function createClient() {
  const cookieStore = await cookies();
  const cookiesObject = cookieStore.getAll().reduce((acc, cookie) => {
    acc[cookie.name] = cookie.value;
    return acc;
  }, {});

  try {
    const client = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return cookiesObject; // plain object로 반환
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    });
    console.log("Supabase client created successfully");
    return client;
  } catch (error) {
    console.error("Error creating Supabase client:", error);
    throw error;
  }
}
