"use client";
import COMPETITION from "~/data/competition/Competition";
import TAGS from "~/data/competition/Tags";
import CompetitionList from "~/parts/Competition/CompetitionList";
import Header from "~/parts/Competition/Header";
import TagList from "~/parts/Idea/Index/TagList";
import { useEffect } from "react";
import { supabaseBrowser } from "~/utils/supabase-browser";

export default  function CompetitionPage() {
  useEffect(() => {
    async function fetchCompetition() {
      const { data, error } = await supabaseBrowser.from("competitions").select("*");
      console.log(data, error);
    }

    fetchCompetition().then((r) => console.log(r)).catch((e) => console.log(e));
  }, [supabaseBrowser]);
  
  return (
    <div>
      <section className="w-full h-full pt-1 md:pt-8 relative">
        <Header />
        <TagList tags={TAGS} />
        <CompetitionList competition={COMPETITION} />
      </section>
    </div>
  );
}
