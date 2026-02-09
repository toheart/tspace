import { fetchGitHubStars } from "@/lib/github";
import ClientPage from "@/components/ClientPage";

// ISR: 每小时重新生成页面
export const revalidate = 3600;

const REPOS = ["toheart/goanalysis", "toheart/cocursor"];

export default async function Home() {
  const stars = await fetchGitHubStars(REPOS);

  return <ClientPage stars={stars} />;
}
