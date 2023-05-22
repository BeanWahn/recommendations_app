'use client';
import {AnimeCard} from './anime-card'
import { Grid } from '@mantine/core';

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
export function AnimeCardGrid({
  animeList,
}: {
  animeList: AnimeList;
}) {
  const rows = [];
  for (let i = 0; i < animeList.results.length; i++) {
      let anime = animeList.results[i];
      rows.push(
      <Grid.Col key={i} xs={6} lg={4}>
        <AnimeCard anime={anime}/>
      </Grid.Col>
      );
  }

  return (
    <Grid align="stretch">
      {rows}
    </Grid>
  );
}
