import { redirect } from "next/navigation";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
});

export const registerAction = async (_prevState: any, params: FormData) => {
  "use server";
  const validation = registerSchema.safeParse({
    name: params.get("name") as string,
    email: params.get("email") as string,
    password: params.get("password") as string,
  });

  if (validation.success) {
    // save the data with prisma
    redirect("/");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
};
