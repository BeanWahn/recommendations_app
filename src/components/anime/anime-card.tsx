'use client';
import { MantineProvider, Stack, Group, Card, Image, AspectRatio, Text, Badge, Button, createStyles } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    figure:{
        width:"100%",
        height:"100%"
    },
    imageWrapper:{
        height:"100%"
    },
    image:{
        objectPosition: "top center"
    }
}));

interface AnimeCard {
    id: string,
    title: string,
    image: string,
    url: string,
    genres: Array<string>
}
export function AnimeCard({
    anime
}:{
    anime:AnimeCard
}){
    const { classes } = useStyles();

    const genreElements = [];
    for (let i = 0; i < anime.genres.length; i++) {
        const genre = anime.genres[i];
        genreElements.push(
        <Badge key={i} color="blue" variant="light">
        {genre}
        </Badge>
        );
    }

    return (
    <>
    <MantineProvider
      theme={{
        components: {
          Card: {
            styles: {
              root: { height: '100%' },
            },
          },
          Stack: {
            styles: {
              root: { height: '100%' },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
        <Card pt="0" shadow="sm" radius="md" withBorder>
            <Stack>
                <Card.Section>
                <AspectRatio ratio={1 / 1} mx="0">
                  <Image
                    classNames={{
                        figure: classes.figure,
                        imageWrapper: classes.imageWrapper,
                        image: classes.image,
                    }}
                    width="100%"
                    height="100%"
                    fit="cover"
                    src={anime.image}
                    alt={anime.title}
                  />
                </AspectRatio>
                </Card.Section>
                <Group spacing="sm"> 
                  {genreElements}
                </Group>
                <Text mt="auto" weight={500}>{anime.title}</Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                  <Link href={"/anime/"+anime.id}>
                    View Anime Details
                  </Link>
                </Button>
            </Stack>
        </Card>
        </MantineProvider>
    </>
  )
};