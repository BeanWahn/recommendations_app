'use client';
import {AnimeCardGrid} from '../../components/anime/anime-card-grid';
import {AnimeSearch} from '../../components/anime/anime-search';
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

interface AnimeList {
    currentPage:string,
    hasNextPage:boolean,
    results:Array<AnimeCard>
}
interface AnimeCard {
    id: string,
    title: string,
    image: string,
    url: string,
    genres: Array<string>
}

export async function searchAnime(query:string) {
    const res = await fetch('https://consumet-api-production-b530.up.railway.app/anime/gogoanime/'+query);
    const result = await res.json();
    console.log(result);
}

export default function AnimePage({
    animeList,
  }: {
    animeList: AnimeList;
  }) {
  return (
  <main
    className='rounded-lg bg-white p-8 pt-6'
  >
    <h1 className="mt-0">Anime List</h1>
    <AnimeSearch/>
    <AnimeCardGrid animeList={animeList}/>
  </main>
  );
}