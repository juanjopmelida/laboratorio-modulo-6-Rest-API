export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 1,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
});
