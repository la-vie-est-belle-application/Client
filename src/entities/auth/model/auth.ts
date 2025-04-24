import { User } from "@supabase/supabase-js";
import createClient from "@entities/supabase/config/server";

interface UserProfile {
  userEmail: string;
  password: string;
  confirmPassword: string;
  userName: string;
  userPhoneNumber: string;
  userBirth: string;
}

type AuthCredentials = Pick<UserProfile, "userEmail" | "password">;

interface AuthService {
  signUp(profile: UserProfile): Promise<User | null>;
}

class Auth implements AuthService {
  async signUp(profile: UserProfile): Promise<User | null> {
    const { userEmail, password, userName, userPhoneNumber, userBirth } =
      profile;
    const supabase = await createClient();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: userEmail,
        password,
      },
    );

    if (signUpError) throw new Error(signUpError.message);
    const user = signUpData.user;
    if (!user) return null;

    const { error: insertError } = await supabase.from("user_profiles").insert({
      id: user.id,
      user_name: userName,
      user_phone_number: userPhoneNumber,
      user_birth: userBirth,
    });

    if (insertError) throw new Error(insertError.message);

    return user;
  }
}

export const auth = new Auth();
