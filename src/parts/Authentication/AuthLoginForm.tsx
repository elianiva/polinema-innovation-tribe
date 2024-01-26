"use client";

import { useForm } from "react-hook-form";
import { Input } from "~/components/Form/Input";
import { Form } from "~/components/Form/Form";
import { authSchema, type AuthSchema } from "~/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { handleLoginWithCredentials } from "~/parts/Authentication/login-action";

export default function AuthLoginForm() {
  const router = useRouter();
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema)
  });

  return (
    <>
      <Form
        form={form}
        onSubmit={(data) => {
          startTransition(() => {
            void handleLoginWithCredentials(data);
          });
        }}
        className="my-4 w-full max-w-md"
      >
        <Input
          label="Email"
          id="email"
          placeholder="email@example.com"
          {...form.register("email")}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤ ⬤"
          {...form.register("password")}
        />
        <button className="btn btn-primary mx-auto">Submit</button>
      </Form>
    </>
  );
}
