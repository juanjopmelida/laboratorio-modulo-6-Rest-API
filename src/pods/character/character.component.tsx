import React from 'react';
import { Character } from './character.vm';
import { CharacterCard } from '../../common/components/character/character-card.component';

interface Props {
  character: Character;
  onClick: () => void;
  isDetail: boolean;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onClick, isDetail } = props;

  return (
    <CharacterCard character={character} onClick={onClick} isDetail={isDetail} />
  );
};
