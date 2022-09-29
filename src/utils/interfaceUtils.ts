import { User } from "@prisma/client";

export type ISignUp = Omit<User, "id">

export type ISignIn = Omit<User, "name" | "profile_url">

export type ISignInData = Omit<User, "name" | "profile_url" | "password">