import { LoginForm } from "@entities/auth/ui/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">로그인</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
