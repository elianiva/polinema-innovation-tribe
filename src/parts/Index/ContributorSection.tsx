import Image from "next/image";

type Contributor = {
  name: string;
  avatarUrl: string;
  githubUrl: string;
  jobDesc: string;
};

type ContributorSectionProps = {
  contributors: Contributor[];
};

export default function ContributorSection({ contributors }: ContributorSectionProps) {
  return (
    <section className="py-10 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 flex-col md:flex-col">
        <h1 className="text-slate-400 text-center font-medium">Made by</h1>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {contributors.map((contributor) => (
            <a
              key={contributor.name}
              href={contributor.githubUrl}
              target="_SEJ"
              rel="noopener"
            >
              <div className="text-gray-200 flex gap-3 items-center">
                <div className="bg-slate-300 w-fit p-1 rounded-full">
                  <Image
                    width={32}
                    height={32}
                    className="min-w-[2rem]s max-w-[2.5rem] rounded-full"
                    src={contributor.avatarUrl}
                    alt={contributor.name}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-md">{contributor.name}</h4>
                  <p className="text-xs italic">{contributor.jobDesc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a className="text-sm text-slate-500">
          and other creative people...
        </a>
      </div>
    </section>
  );
}
