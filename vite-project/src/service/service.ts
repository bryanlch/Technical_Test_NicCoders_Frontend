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

async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1,10"
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

export { fetchCharacters };
