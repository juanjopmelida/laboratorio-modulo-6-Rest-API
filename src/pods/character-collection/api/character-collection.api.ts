import { Character } from '../../character/api/character.api-model';

const characterListUrl = '/api/character/';

export const getCharacterCollection = async (): Promise<
  Character[]
> => {
  const response = await fetch(
    `${process.env.API_CHARACTERS_URL}${characterListUrl}`
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};
