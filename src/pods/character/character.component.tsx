import React from 'react';
import { Character } from './character.vm';
import { CharacterCollectionCard } from '../../common/components/character-collection-card/character-collection-card.component';
import { CharacterCard  } from "../../common/components/character-card/character-card.component"

interface Props {
  character: Character;
  onClick: () => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onClick } = props;

  return (
      <CharacterCard character={character} onClick={onClick} />
  );
};
