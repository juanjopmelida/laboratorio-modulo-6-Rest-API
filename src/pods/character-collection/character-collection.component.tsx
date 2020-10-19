import * as React from 'react';
import { Character } from '../character/character.vm';
import { CharacterCard } from '../../common/components/character/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: Character[];
  onClick: (id: number) => void;
  isDetail: boolean;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onClick, isDetail } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onClick={onClick} isDetail={isDetail} />
          </li>
        ))}
      </ul>
    </div>
  );
};
