import Axios from 'axios';
import { Character } from './character.api-model';

const characterListUrl = '/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${process.env.API_CHARACTERS_URL}${characterListUrl}/${id}`);
  return data;
};
