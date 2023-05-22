'use client';
import { Image, Grid } from '@mantine/core';

interface Episode 
{
    id: string,
    number: string,
    url: string
}
interface AnimeDetails {
    id: string,
    title: string,
    url: string,
    genres: Array<string>,
    totalEpisodes: Number,
    image: string,
    releaseDate: string,
    description: string,
    subOrDub: string,
    type: string,
    status: string,
    otherName: string,
    episodes: Array<Episode>,
}
export function AnimeDetails({
    anime,
}: {
    anime: AnimeDetails;
}){
    return (
        <>
        <Grid>
            <Grid.Col span={4}>
                <Image
                    src={anime.image}
                    alt={anime.title}
                />
            </Grid.Col>
            <Grid.Col span={8}>
                <h2>{anime.title}</h2>
                {anime.description}
            </Grid.Col>
        </Grid>
        </>
    );
};