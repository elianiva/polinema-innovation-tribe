import Link from "next/link";
import Header from "~/parts/Idea/Index/Header";
import SearchInput from "~/parts/Idea/Index/SearchInput";
import TagList from "~/parts/Idea/Index/TagList";
import IdeasList from "~/parts/Idea/Index/IdeasList";
import { fetchIdeas } from "~/services/idea/all-ideas";
import { fetchTags } from "~/services/tags/all-tags";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "~/utils/supabase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas"
};

export default async function IdeaHomePage() {
  const cookieStore = cookies();
  const supabase = createSupabaseServerClient(cookieStore);
  const session = await supabase.auth.getSession();
  const ideas = await fetchIdeas(cookieStore);
  const tags = await fetchTags(cookieStore);

  return (
    <section className="w-full h-full pt-1 md:pt-8 relative">
      <Header />
      {session !== null ? (
        <>
          <SearchInput />
          <TagList tags={tags} />
          <IdeasList ideas={ideas} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center pt-24">
          <Link
            href="/login"
            className="text-base font-bold text-gray-200 btn bg-purple-500 hover:bg-purple-600"
          >
            Please sign in
          </Link>
        </div>
      )}
    </section>
  );
}
