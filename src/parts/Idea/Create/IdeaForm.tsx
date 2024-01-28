"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  HiLightBulb as LightBulbIcon,
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
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full">
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
            placeholder="A title for your idea"
            icon={<LightBulbIcon />}
            {...form.register("title")}
          />
          <TextAreaInput
            label="Description"
            id="description"
            placeholder="A brief description of the idea you're proposing"
            icon={<BeakerIcon />}
            {...form.register("description")}
          />
          <TextAreaInput
            label="Problem"
            id="problem"
            placeholder="What are the problems you're trying to solve?"
            icon={<ShieldIcon />}
            {...form.register("problem")}
          />
          <TextAreaInput
            label="Solution"
            id="solution"
            placeholder="How are you going to solve it?"
            icon={<BeakerIcon />}
            {...form.register("solution")}
          />
          <button className="btn btn-primary">Submit</button>
        </Form>
      </div>
      <ProTips />
    </div>
  );
}

export default IdeaForm;
