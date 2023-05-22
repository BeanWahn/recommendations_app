'use client';
import { TextInput, Button, Group, Autocomplete } from '@mantine/core';
import { useForm } from '@mantine/form';
import { searchAnime } from './anime-page';

export function AnimeSearch() {
  const form = useForm({
    initialValues: {
        query: ''
    },
  });

  async function formSubmit(values:{query:string}){
    searchAnime(values.query);
  }

  return (
    <form style={{width:'100%'}} onSubmit={form.onSubmit((values)=>formSubmit(values))}>
      <Group align="end" mb="25px" mx="auto" noWrap={true}>
        <Autocomplete
            styles={{ root: { width: '100%' } }}
            label="Search for an Anime"
            placeholder="e.g. One Piece, Naruto, etc."
            data={['React', 'Angular', 'Svelte', 'Vue']}
            {...form.getInputProps('query')}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Group>
    </form>
  );
}