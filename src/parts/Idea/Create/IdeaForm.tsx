"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiLightBulb as LightBulbIcon,
  HiPhone as PhoneIcon,
  HiLockClosed as LockClosedIcon,
  HiBeaker as BeakerIcon,
  HiShieldExclamation as ShieldIcon
} from "react-icons/hi2";
import { useForm } from "react-hook-form";
import ProTips from "~/parts/Idea/Create/ProTips";
import { Input } from "~/components/Form/Input";
import { TextAreaInput } from "~/components/Form/TextAreaInput";
import { type IdeaSchema, ideaSchema } from "~/schema/idea";
import { Form } from "~/components/Form";
import { startTransition } from "react";
import { handleCreateIdea } from "~/parts/Idea/Create/create-idea-action";

function IdeaForm() {
  const form = useForm<IdeaSchema>({
    resolver: zodResolver(ideaSchema)
  });

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full p-3">
        <Form
          form={form}
          onSubmit={(data) => {
            startTransition(() => {
              void handleCreateIdea(data);
            });
          }}
          className="my-4"
        >
          <Input
            label="Title"
            id="title"
            placeholder="Idea Title"
            icon={<LightBulbIcon />}
            {...form.register("title")}
          />
          <Input
            label="Problem"
            id="problem"
            placeholder="What kind of Problem?"
            icon={<ShieldIcon />}
            {...form.register("problem")}
          />
          <Input
            label="Solution"
            id="solution"
            placeholder="How do you solve it?"
            icon={<BeakerIcon />}
            {...form.register("solution")}
          />
          <TextAreaInput
            label="Description"
            id="description"
            placeholder="What is it?"
            icon={<BeakerIcon />}
            {...form.register("description")}
          />
          <Input
            label="Deadline"
            id="Deadline"
            placeholder="Deadline..."
            icon={<LockClosedIcon />}
            type="date"
            {...form.register("deadline")}
          />
          <Input
            label="Whatsapp"
            id="whatsapp"
            placeholder="+628123456789"
            icon={<PhoneIcon />}
            {...form.register("whatsapp")}
          />
          <button className="btn btn-primary">Submit</button>
        </Form>
      </div>
      <ProTips />
    </div>
  );
}

export default IdeaForm;
