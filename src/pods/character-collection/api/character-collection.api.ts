import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const characterListUrl = '/api/character/';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
   const {data} = await Axios.get(`${process.env.API_CHARACTERS_URL}${characterListUrl}`)
  return data;
};
// export const getCharacterCollection = async (): Promise<
//   CharacterEntityApi[]
// > => {
//   const response = await fetch(
//     `${process.env.API_CHARACTERS_URL}${characterListUrl}`
//   );
//   if (response.ok) {
//     return await response.results.json();
//   } else {
//     throw Error(response.statusText);
//   }
// };

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
