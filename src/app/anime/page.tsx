import {AnimeCardGrid} from '../../components/anime/anime-card-grid';
import {AnimeSearch} from '../../components/anime/anime-search';
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import AnimePage from "../../components/anime/anime-page";

async function getRecentAnime() {
  const res = await fetch("https://consumet-api-production-b530.up.railway.app/anime/gogoanime/top-airing");
  return res.json();
}

export const metadata = {
  title: 'Anime Dashboard',
  description: 'Anime Dashboard',
}
 
export default async function Page() {
  // Initiate both requests in parallel
  const recentAnimeData = getRecentAnime();
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  // Wait for the promises to resolve
  const [recentAnime] = await Promise.all([recentAnimeData]);

  return (
    <AnimePage animeList={recentAnime}></AnimePage>
  );
}