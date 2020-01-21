import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  LinearProgress,
  Zoom
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const getProgress = (have, need) => {
  const value = (have / need) * 100;
  if (value > 100) return 100;
  return value;
};

const getDelay = index => `${(index + 1) * 50}ms`;

const HourCard = ({
  day,
  time,
  place,
  committedAdorers,
  requiredNumberOfAdorers,
  displayIndex
}) => {
  const classes = useStyles();
  const progress = getProgress(committedAdorers, requiredNumberOfAdorers);
  return (
    <Zoom in style={{ transitionDelay: getDelay(displayIndex) }}>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {day}
          </Typography>
          <Typography variant="h5" component="h2">
            {time}
          </Typography>
          <Typography className={classes.pos} noWrap color="textSecondary">
            {place}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color={progress === 100 ? 'primary' : 'secondary'}
          />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Pick Up
          </Button>
          <Button size="small">More Info</Button>
        </CardActions>
      </Card>
    </Zoom>
  );
};

HourCard.propTypes = {
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  committedAdorers: PropTypes.number.isRequired,
  requiredNumberOfAdorers: PropTypes.number.isRequired,
  displayIndex: PropTypes.number.isRequired
};

export default HourCard;
