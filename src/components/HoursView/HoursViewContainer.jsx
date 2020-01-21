import React from 'react';
import { gql } from 'apollo-boost';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
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

  if (error) return <p>Error loading hours...</p>;

  const sections = sortHoursByDay(data.hours);

  return <HoursView sections={sections} />;
};

export default HoursViewContainer;
