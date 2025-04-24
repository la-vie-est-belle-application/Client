import { handleLogin } from "@entities/auth";

export default function LoginPage() {
  return (
    <form action={handleLogin}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button>Log in</button>
    </form>
  );
}
