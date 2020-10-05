import Axios from 'axios';
import { Character } from '../../character/api';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const characterListUrl = '/api/character/';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  //return characterCollection;
  //*** */
  // const { data } = await Axios.get<Character[]>(
  //   'https://rickandmortyapi.com/api/character/'
  // );
  // return data;
  //*** */
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
