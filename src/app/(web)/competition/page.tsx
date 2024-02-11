import Header from "~/features/Competition/Header";

export default function CompetitionPage() {
  return (
    <div>
      <section className="w-full h-full pt-1 md:pt-8 relative">
        <Header />
        <h1 className="text-2xl text-slate-200 text-center py-24">
          For now, please visit
          {" "}
          <a
            className="text-violet-400"
            href="https://jayanti.jti.polinema.ac.id"
          >
            jayanti.jti.polinema.ac.id
          </a>
          {" "}
          instead.
        </h1>
        {/*<TagList tags={TAGS} />*/}
        {/*<CompetitionList competition={COMPETITION} />*/}
      </section>
    </div>
  );
}
