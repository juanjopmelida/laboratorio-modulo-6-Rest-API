import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ViewIcon from '@material-ui/icons/ZoomOutMap';
import { CharacterEntityVm } from '../../../pods/character-collection/character-collection.vm';
import * as classes from './character-collection-card.styles';
interface Props {
  character: CharacterEntityVm;
  onClick: (id: number) => void;
}

export const CharacterCollectionCard: React.FunctionComponent<Props> = (props) => {
  const { character, onClick } = props;
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
            style={{ paddingTop: '65%', width: '80%' }}
          />
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onClick(character.id)}>
          <ViewIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
