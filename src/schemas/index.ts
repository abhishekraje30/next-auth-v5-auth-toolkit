import { UserRole } from "@prisma/client";
import * as z from "zod";
export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      if (!data.password && data.newPassword) {
        return false;
      }
      return true;
    },
    {
      path: ["password", "newPassword"],
      message: "Please enter your current password and your new password",
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Please enter a password with at least 6 characters",
  }),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(6, {
      message: "Please enter a password with at least 6 characters",
    })
    .max(20, {
      message: "Please enter a password with at most 20 characters",
    }),
});
