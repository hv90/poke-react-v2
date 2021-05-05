export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    // eslint-disable-next-line camelcase
    front_default: string;
  };
}

export interface IPokemonSpecies {
  // eslint-disable-next-line camelcase
  flavor_text_entries: {
    // eslint-disable-next-line camelcase
    flavor_text: string;
    language: { name: string; url: string };
    version: { name: string; url: string };
  }[];
}
