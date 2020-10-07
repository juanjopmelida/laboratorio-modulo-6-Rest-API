import { Character } from './character.api-model';
import Axios from 'axios';

const characterListUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};
