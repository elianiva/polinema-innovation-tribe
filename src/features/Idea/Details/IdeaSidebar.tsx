import { ProfileSidebar } from "~/components/ProfileSidebar";
import type { IdeaSchema } from "~/schema/idea";

export default function IdeaSidebar(props: IdeaSchema) {
  return (
    <div className="sidebar">
      <ProfileSidebar {...props.author} />
    </div>
  );
}
