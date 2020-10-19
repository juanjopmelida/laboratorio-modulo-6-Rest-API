import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapFromApiToVm } from './character.mapper';
import { CharacterComponent } from './character.component';
import { linkRoutes } from 'core/router';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapFromApiToVm(apiCharacter));
  };

  const handleClick = () => {
    history.push(linkRoutes.characterCollection);
  };

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);

  return (
    <CharacterComponent
      character={character}
      onClick={handleClick}
      isDetail={true}
    />
  );
};
