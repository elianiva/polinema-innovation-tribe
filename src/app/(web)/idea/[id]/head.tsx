import { Seo } from "~/components/Seo";

type IdeaMeta = {
  params: {
    id: string;
  };
};

export default function Head({ params }: IdeaMeta) {
  return <Seo seoData={{ title: "Idea" }} />;
}
