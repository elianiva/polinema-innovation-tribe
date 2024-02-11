import type { PropsWithChildren } from "react";
import { Button } from "flowbite-react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = PropsWithChildren<{}>;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      color="purple"
      className="max-w-fit"
      isProcessing={pending}
      disabled={pending}
      aria-disabled={pending}
    >
      {props.children}
    </Button>
  );
}