import Axios from 'axios'
import { Character } from '../../character/api/character.api-model';

const characterListUrl = '/api/character/';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const {data} = await Axios.get(`${process.env.API_CHARACTERS_URL}${characterListUrl}`);
  return data.results;
};
