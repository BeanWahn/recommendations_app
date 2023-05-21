'use client';
import { Container, Grid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface AnimeCard {
  animeId: string,
  episodeId: string,
  animeTitle: string,
  episodeNum: string,
  subOrDub: string,
  animeImg: string,
  episodeUrl: string
}

export function AnimeCardGrid({
  data,
}: {
  data: Array<AnimeCard>;
}) {
  const rows = [];
  for (let i = 0; i < data.length; i++) {
      let anime = data[i];
      rows.push(
      <Grid.Col span={4}>
        <Card shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image
              src={anime.animeImg}
              height={160}
              alt={anime.animeTitle}
            />
          </Card.Section>

          <Grid>
            <Grid.Col span={12}>
              <Badge mt="md" color="pink" variant="light">
                {anime.subOrDub}
              </Badge>
            </Grid.Col>
            <Grid.Col span={12}>
              <Text weight={500}>{anime.animeTitle}</Text>
            </Grid.Col>
          </Grid>

          <Button component="a" target="_blank" rel="noopener noreferrer" href={anime.episodeUrl} variant="light" color="blue" fullWidth mt="md" radius="md">
            View Anime Now
          </Button>
        </Card>
      </Grid.Col>
      );
  }

  return (
    <Container>
      <Grid>
        {rows}
      </Grid>
    </Container>
  );
}
