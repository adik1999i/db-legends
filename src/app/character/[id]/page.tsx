import CharacterDetail from '../../../components/Character';
import { ALL_CHARACTERS, CharacterId } from '../../../data/characters';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';


function isValidCharacterId(id: string): id is CharacterId {
    return id in ALL_CHARACTERS;
  }
  
  // Define params interface
  type PageProps = {
    params: { id: string } | Promise<{ id: string }>;
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  // Metadata generation
  export async function generateMetadata({ 
    params 
  }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    
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
  
  // Page component
  export default async function Page({ 
    params 
  }: PageProps) {
    const resolvedParams = await params;
    
    if (!isValidCharacterId(resolvedParams.id)) {
      notFound();
    }
  
    const character = ALL_CHARACTERS[resolvedParams.id];
    return <CharacterDetail character={character} />;
  }
  
  // Static params generation for optimization
  export function generateStaticParams() {
    return Object.keys(ALL_CHARACTERS).map((id) => ({
      id
    }));
  }