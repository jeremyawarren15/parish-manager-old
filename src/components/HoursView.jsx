import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from './AddButton';
import HoursViewSection from './HoursViewSection';
import { sortHoursByDay } from '../helpers/HourHelper';

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

const HoursView = () => {
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

  return (
    <>
      <Grid container spacing={3}>
        {Object.keys(sections).map(section => (
          <HoursViewSection
            key={section}
            headerText={section}
            hours={sections[section]}
          />
        ))}
      </Grid>

      <AddButton />
    </>
  );
};

export default HoursView;
