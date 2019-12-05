import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddButton from './AddButton';
import HoursViewSection from './HoursViewSection';

const getHoursQuery = gql`
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
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const HoursView = props => {
  const { data, loading } = useQuery(getHoursQuery);
  const classes = useStyles();

  const getHoursByDay = hours => {
    return hours.reduce((tempHours, hour) => {
      const { dayString } = hour;

      // eslint-disable-next-line no-param-reassign
      tempHours[dayString] = tempHours[dayString]
        ? [...tempHours[dayString], hour]
        : [hour];

      return tempHours;
    }, {});
  };

  const days = !loading && getHoursByDay(data.hours);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {!loading ? (
          Object.keys(days).map((day, index) => (
            <HoursViewSection key={index} headerText={day} hours={days[day]} />
          ))
        ) : (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
      <AddButton />
    </div>
  );
};

export default HoursView;
