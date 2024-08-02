import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ZodIssue } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors.find((item) => item.path.includes(fieldName))?.message || [];
};
