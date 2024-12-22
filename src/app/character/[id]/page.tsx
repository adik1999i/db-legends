import CharacterDetail from '../../../components/Character';
import { ALL_CHARACTERS, CharacterId } from '../../../data/characters';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';


function isValidCharacterId(id: string): id is CharacterId {
  return id in ALL_CHARACTERS;
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  // Handle params as a whole object
  const params = await Promise.resolve(props.params);
  
  if (!isValidCharacterId(params.id)) {
    return {
      title: 'Character Not Found - DB Legends Codex'
    };
  }

  const character = ALL_CHARACTERS[params.id];
  return {
    title: `${character.name} - DB Legends Codex`,
    description: character.title
  };
}

export default async function Page(props: Props) {
  // Handle params as a whole object
  const params = await Promise.resolve(props.params);

  if (!isValidCharacterId(params.id)) {
    notFound();
  }

  const character = ALL_CHARACTERS[params.id];
  return <CharacterDetail character={character} />;
}

// Generate static params
export async function generateStaticParams() {
  return Object.keys(ALL_CHARACTERS).map((id) => ({
    id: id,
  }));
}