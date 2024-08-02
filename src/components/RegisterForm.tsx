"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterFormValues } from "@/interfaces";
import type { ZodIssue } from "zod";
import { findErrors } from "@/lib/utils";

type Props = {
  action: (
    _prevState: any,
    params: FormData
  ) => Promise<{ errors: ZodIssue[] }>;
};

const RegisterForm = ({ action }: Props) => {
  const [state, formAction] = useFormState(action, { errors: [] });

  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <div className="grid w-full gap-2">
          {/* name input */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input className="focus-visible:ring-indigo-600" {...field} />
                </FormControl>
                <FormMessage>{findErrors("name", state.errors)}</FormMessage>
              </FormItem>
            )}
          />
          {/* email input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    type="email"
                    className="focus-visible:ring-indigo-600"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{findErrors("email", state.errors)}</FormMessage>
              </FormItem>
            )}
          />
          {/* password input */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-indigo-600"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {findErrors("password", state.errors)}
                </FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
