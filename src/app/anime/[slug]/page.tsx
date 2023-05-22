import {AnimeCardGrid} from '../../../components/anime/anime-card-grid';
import {AnimeSearch} from '../../../components/anime/anime-search';
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from 'next';
import { AnimeDetails } from '../../../components/anime/anime-details';

async function getAnimeDetails(animeId:string) {
  const res = await fetch('https://consumet-api-production-b530.up.railway.app/anime/gogoanime/info/'+animeId);
  return res.json();
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const anime = await getAnimeDetails(params.slug);
  return {
    title: anime.title,
    description: anime.synopsis
  };
}
 
export default async function Page({ params }: { params: { slug: string, title: string } }) {
  // Initiate both requests in parallel
  const anime = await getAnimeDetails(params.slug);
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
  <main
    className='rounded-lg bg-white p-8 pt-6'
  >
    <h1 className="mt-0">{anime.title}</h1>
    <AnimeDetails anime={anime}/>
  </main>
  );
}