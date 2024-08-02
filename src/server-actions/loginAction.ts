"use server";

import { z } from "zod";
import type { ZodIssue } from "zod";
import { signIn } from "@/auth";

const loginSchema = z.object({
  email: z.string().min(1, "Please enter your email").email("Invalid email"),
});

export const loginAction = async (
  _prevState: any,
  params: FormData
): Promise<{ errors: ZodIssue[]; success: boolean }> => {
  // Validate the form data with zod
  const validation = loginSchema.safeParse({
    email: params.get("email") as string,
  });

  // If zod validation fails, return the errors immediately
  if (!validation.success) {
    console.log("Validation failed", validation.error.issues);
    return {
      success: false,
      errors: validation.error.issues,
    };
  }

  // If zod validation passes, attempt to sign in
  const res = await signIn("resend", {
    redirect: false,
    redirectTo: "/",
    email: validation.data.email,
  });

  // Check if the response is a string and includes "error". This catches the case where signIn returns a URL with an error parameter.
  if (typeof res === "string" && res.includes("error")) {
    console.error("Error in signIn:", res);
    return {
      success: false,
      errors: [
        {
          code: "custom",
          path: ["email"],
          message:
            "Something went wrong while trying to send the magic link. Please try again later.",
        },
      ],
    };
  }

  // Still check for res.error to handle cases where signIn returns an object with an error property.
  if (res?.error) {
    console.error("Error in signIn:", res.error);
    return {
      success: false,
      errors: [{ code: "custom", path: ["email"], message: res.error }],
    };
  }

  return {
    success: true,
    errors: [],
  };
};
