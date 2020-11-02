import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import { DebounceTextField } from "../../components/form/debounce-text-field"
import ViewIcon from '@material-ui/icons/Details';
import { CharacterEntityVm } from '../../../pods/character-collection/character-collection.vm';
import * as classes from './character-card.styles';
import { linkRoutes } from '../../../core/router';
import { useHistory } from 'react-router-dom';
import { mapCharacterFromVmToApi } from 'pods/character/character.mappers';
import * as api from '../../../pods/character/api';
import { Character } from '../../../pods/character/api';

interface Props {
  character: CharacterEntityVm;
  onClick: (id: number) => void;
  isDetail: boolean;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onClick, isDetail } = props;
  const history = useHistory();

  const handleCommentsChange = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.setCharacter(apiCharacter);
    if (success){
      history.goBack();
    } else {
      alert("Error on save comments");
    }
  };

  return (
    <Card>
      <CardHeader
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ paddingTop: '15%', width: '15%' }}
          />
          {isDetail &&
            <div className="profile-details">
              <h2>Character Details</h2>
              <ul>
                <li>
                  <strong>Name:</strong> { character.name }
                </li>
                <li>
                  <strong>Status:</strong> { character.status }
                </li>
                <li>
                  <strong>Gender:</strong> { character.gender }
                </li>
                <li>
                  <strong>Species:</strong> { character.species }
                </li>
                <li>
                  <strong>Location:</strong> { character.location?.name }
                </li>
                <li>
                  <strong>Originally From:</strong> { character.origin?.name }
                </li>
                {isDetail &&
                  <>
                  <li>
                    <strong>Your comments:</strong>
                  </li>
                  <DebounceTextField value={character.comments} placeholder="Your comments here..." onChangeText={handleCommentsChange} />
                  </>
                }
              </ul>
            </div>
          }
        </div>
      </CardContent>
      <CardActions>
          {isDetail ? (
            <IconButton onClick={() => history.push(linkRoutes.characterCollection)}>
              <BackIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => onClick(character.id)}>
              <ViewIcon />
            </IconButton>
          )}
      </CardActions>
    </Card>
  );
};
