import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ViewIcon from '@material-ui/icons/Details';
import { CharacterEntityVm } from '../../../pods/character-collection/character-collection.vm';
import * as classes from './character-card.styles';
import { linkRoutes } from '../../../core/router';

interface Props {
  character: CharacterEntityVm;
  onClick: (id: number) => void;
  isDetail: boolean;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onClick, isDetail } = props;
  const history = useHistory();

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
