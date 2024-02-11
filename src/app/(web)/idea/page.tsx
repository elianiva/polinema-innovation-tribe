import Link from "next/link";
import SearchInput from "~/features/Idea/Index/SearchInput";
import TagList from "~/features/Idea/Index/TagList";
import IdeasList from "~/features/Idea/Index/IdeasList";
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
    <section className="w-full h-full relative">
      <header className="max-w-screen-sm mx-auto">
        <h1 className="text-gray-200 text-2xl md:text-3xl font-bold text-center">
          Explore Tons of Ideas Made by Others!
        </h1>
        <p className="text-slate-400 text-md md:text-lg text-center mt-4 max-w-screen-md mx-auto">
          Explore ideas, share your thoughts , and engage with the community at
          Polinema Innovation Tribe!
        </p>
      </header>
      {session !== null ? (
        <>
          <SearchInput />
          <TagList tags={tags} />
          <div className="max-w-screen-md mx-auto">
            <IdeasList ideas={ideas} />
          </div>
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
