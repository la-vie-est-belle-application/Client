import { z } from "zod";
import { userSchema } from "@entities/auth/model/schema";

export type UserSchema = z.infer<typeof userSchema>;
