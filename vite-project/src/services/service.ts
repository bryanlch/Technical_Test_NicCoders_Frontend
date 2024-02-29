interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

async function fetchCharacters(page: number, pageSize: number): Promise<{ results: Character[]; total: number }> {
  console.log("🚀 ~ file: service.ts:23 ~ page:", page)
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&pageSize=${pageSize}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching characters:', error);
    return {
      results: [],
      total: 0
    };
  }
}

export { fetchCharacters };
