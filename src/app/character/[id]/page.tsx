import CharacterDetail from '../../../components/Character';
import { ALL_CHARACTERS , CharacterId } from '../../../data/characters';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Type guard function
function isValidCharacterId(id: string): id is CharacterId {
  return id in ALL_CHARACTERS;
}

type Props = {
  params: Promise<{ id: string }> | { id: string }
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;
  const resolvedParams = await params;

  if (!isValidCharacterId(resolvedParams.id)) {
    return {
      title: 'Character Not Found - DB Legends Codex'
    };
  }

  const character = ALL_CHARACTERS[resolvedParams.id];
  return {
    title: `${character.name} - DB Legends Codex`,
    description: `${character.title} - ${character.traits.type}`
  };
}

export default async function CharacterPage(props: Props) {
  const { params } = props;
  const resolvedParams = await params;

  if (!isValidCharacterId(resolvedParams.id)) {
    notFound();
  }

  const character = ALL_CHARACTERS[resolvedParams.id];
  return <CharacterDetail character={character} />;
}