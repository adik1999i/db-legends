import CharacterDetail from '../../../components/Character';
import { ALL_CHARACTERS, CharacterId } from '../../../data/characters';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Type guard function
function isValidCharacterId(id: string): id is CharacterId {
  return id in ALL_CHARACTERS;
}

type PageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidCharacterId(params.id)) {
    return {
      title: 'Character Not Found - DB Legends Codex'
    };
  }

  const character = ALL_CHARACTERS[params.id];
  return {
    title: `${character.name} - DB Legends Codex`,
    description: `${character.title} - ${character.traits.type}`
  };
}

export default async function CharacterPage({ params }: PageProps) {
  if (!isValidCharacterId(params.id)) {
    notFound();
  }

  const character = ALL_CHARACTERS[params.id];
  return <CharacterDetail character={character} />;
}