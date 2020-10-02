import { Character } from './character.api-model';
import Axios from 'axios';

const characterListUrl = '/api/character/';

export const getCharacter = async (id: string): Promise<Character> => {
  //return mockCharacterCollection.find((c) => c.id === id);
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};

export const getCharacterCollection = async (): Promise<Character[]> => {
  //return mockCharacterCollection.find((c) => c.id === id);
  const { data } = await Axios.get<Character[]>(`${characterListUrl}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
