import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from './AddButton';
import HoursViewSection from './HoursViewSection';

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

const sortHoursByDay = hours => {
  return hours.reduce((result, hour) => {
    const { dayString } = hour;

    // eslint-disable-next-line no-param-reassign
    result[dayString] = result[dayString]
      ? [...result[dayString], hour]
      : [hour];

    return result;
  }, {});
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  loader: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const HoursView = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(HOURS_QUERY);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error loading hours...</p>;

  const sections = sortHoursByDay(data.hours);

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default HoursView;
