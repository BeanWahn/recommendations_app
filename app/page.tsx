import {AnimeCardGrid} from './card-grid';
 
async function getRecentAnime() {
  const res = await fetch(`https://gogoanime-api-production-5c62.up.railway.app/recent-release`);
  return res.json();
}
 
export default async function Page() {
  // Initiate both requests in parallel
  const recentAnimeData = getRecentAnime();
 
  // Wait for the promises to resolve
  const [recentAnime] = await Promise.all([recentAnimeData]);
 
  return (
    <>
      <h1>{recentAnime.name}</h1>
      <AnimeCardGrid data={recentAnime}/>
    </>
  );
}