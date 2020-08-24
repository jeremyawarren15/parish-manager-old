import React from 'react';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useQuery } from '@apollo/react-hooks';
import { sortHoursByDay } from '../../helpers/HourHelper';
import HoursView from './HoursView';

const HOURS_QUERY = gql`
  {
    hours(sortByDay: true) {
      id
      day
      dayString
      timeString
      location
      committedAdorers
      requiredNumberOfAdorers
    }
  }
`;

const useStyles = makeStyles(theme => ({
  loader: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const HoursViewContainer = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(HOURS_QUERY, {
    pollInterval: 30 * 1000
  });
  if (loading)
    return (
      <Grid item xs={12} className={classes.loader}>
        <CircularProgress />
      </Grid>
    );

  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        An error occured while retrieving hours. Please try again.
      </Alert>
    );

  // need to update the formatting here
  // this just prevents it from barfing
  if (!data.hours) return <h1>No hours to display</h1>;

  const sections = sortHoursByDay(data.hours);

  return <HoursView sections={sections} />;
};

export default HoursViewContainer;
