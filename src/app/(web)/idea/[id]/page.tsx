import IdeaSidebar from "~/parts/Idea/Details/IdeaSidebar";
import IdeaContent from "~/parts/Idea/Details/IdeaContent";
import { fetchIdeaById } from "~/services/idea/idea-by-id";
import { cookies } from "next/headers";

type IdeaPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: IdeaPageProps) {
  const idea = await fetchIdeaById(cookies(), params.id);
  return {
    title: idea?.title ?? "Idea",
  };
}

export default async function IdeaPage({ params }: IdeaPageProps) {
  const cookieStore = cookies();
  const idea = await fetchIdeaById(cookieStore, params.id);
  if (idea === null || idea === undefined) return null;

  return (
    <div className="w-full justify-center items-center xl:px-56 text-gray-200 flex flex-col lg:flex-row">
      <IdeaContent key={idea.id} {...idea} />
      <IdeaSidebar {...idea} />
    </div>
  );
}
