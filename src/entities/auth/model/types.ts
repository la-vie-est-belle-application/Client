import { z } from "zod";
import { userSchema } from "./schema";

export type UserSchema = z.infer<typeof userSchema>;
