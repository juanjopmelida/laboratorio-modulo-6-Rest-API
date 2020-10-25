import * as React from 'react';
import { Character } from '../character/character.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from '../character/character.mapper';
import { mapToCollection } from '../../common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<Character[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
