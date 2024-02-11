import IdeaContent from "~/features/ideas/components/IdeaContent";
import { fetchIdeaById } from "~/features/ideas/services/idea-by-id";
import { cookies } from "next/headers";

type IdeaPageProps = {
  params: {
    id: string;
  };
};

// TODO(elianiva): figure out how to take the idea title as the page title without having to query for it twice
export async function generateMetadata({ params }: IdeaPageProps) {
  return {
    title: "Idea Detail",
  };
}

export default async function IdeaPage({ params }: IdeaPageProps) {
  const cookieStore = cookies();
  const idea = await fetchIdeaById(cookieStore, params.id);
  if (idea === null || idea === undefined) return null;

  return (
    <div className="w-full justify-center items-center xl:px-56 text-gray-200 flex flex-col lg:flex-row">
      <IdeaContent key={idea.id} {...idea} />
    </div>
  );
}
