/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import CharacterDetail from '../../../components/Character';
import { ALL_CHARACTERS, CharacterId } from '../../../data/characters';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

function isValidCharacterId(id: string): id is CharacterId {
  return id in ALL_CHARACTERS;
}

type PageProps = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
  const resolvedParams = await (('then' in params) ? params : Promise.resolve(params));
  
  if (!isValidCharacterId(resolvedParams.id)) {
    return {
      title: 'Character Not Found - DB Legends Codex'
    };
  }

  const character = ALL_CHARACTERS[resolvedParams.id];
  return {
    title: `${character.name} - DB Legends Codex`,
    description: character.title
  };
}

export default async function Page({ 
  params 
}: PageProps) {
  const resolvedParams = await (('then' in params) ? params : Promise.resolve(params));
  
  if (!isValidCharacterId(resolvedParams.id)) {
    notFound();
  }

  const character = ALL_CHARACTERS[resolvedParams.id];
  return <CharacterDetail character={character} />;
}

export function generateStaticParams() {
  return Object.keys(ALL_CHARACTERS).map((id) => ({
    id
  }));
}