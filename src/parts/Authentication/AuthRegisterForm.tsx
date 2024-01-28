"use client";

import { useForm } from "react-hook-form";
import { Form } from "~/components/Form/Form";
import { registrationSchema, type RegistrationSchema } from "~/schema/registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/Form/Input";
import { startTransition } from "react";
import { handleUserRegistration } from "~/parts/Authentication/register-action";
import toast from "react-hot-toast";

export default function AuthRegisterForm() {
  const form = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema)
  });

  return (
    <>
      <Form
        form={form}
        onSubmit={(data) => {
          startTransition(() => {
            void handleUserRegistration(data).then(() => {
              toast.success("Registered successfully");
            });
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
          label="Username"
          id="username"
          placeholder="john_doe"
          {...form.register("username")}
        />
        <Input
          label="Full Name"
          id="fullname"
          placeholder="John Doe"
          {...form.register("fullname")}
        />
        <div className="flex gap-4">
          <Input
            label="Password"
            id="password"
            type="password"
            {...form.register("password")}
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            {...form.register("confirmPassword")}
          />
        </div>
        <button className="btn btn-primary mx-auto">Submit</button>
      </Form>
    </>
  );
}
