import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCollectionCard } from '../../common/components/character-collection-card/character-collection-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onClick: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onClick } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCollectionCard character={character} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
