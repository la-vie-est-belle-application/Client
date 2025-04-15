import { type NextRequest, NextResponse } from "next/server";
import { supabase } from "../../supabase";

export default async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/sign-up")
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 중요: supabaseResponse 객체를 그대로 반환해야 합니다.
  // 새로운 응답 객체를 NextResponse.next()로 생성하는 경우 다음 사항을 반드시 확인하세요:
  // 1. 다음과 같이 request를 전달해야 합니다:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. 다음과 같이 쿠키를 복사해야 합니다:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. myNewResponse 객체를 필요에 맞게 수정하되, 쿠키는 변경하지 마세요!
  // 4. 마지막으로:
  //    return myNewResponse
  // 이를 지키지 않으면 브라우저와 서버가 동기화되지 않아 사용자의 세션이 조기에 종료될 수 있습니다!

  return supabaseResponse;
}
