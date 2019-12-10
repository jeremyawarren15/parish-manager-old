import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HourCard from './HourCard';

const useStyles = makeStyles(theme => ({
  heading: {
    color: theme.palette.text.secondary
  }
}));

const HoursViewSection = props => {
  const { headerText, hours } = props;
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.heading} variant="h4">
          {headerText}
        </Typography>
      </Grid>
      {hours.map((hour, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <HourCard
            day={hour.dayString}
            time={hour.timeString}
            place={hour.location}
            committedAdorers={hour.committedAdorers}
            requiredNumberOfAdorers={hour.requiredNumberOfAdorers}
            displayIndex={index}
          />
        </Grid>
      ))}
    </>
  );
};

export default HoursViewSection;
