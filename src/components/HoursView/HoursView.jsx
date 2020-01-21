import React from 'react';
import { Grid } from '@material-ui/core';
import AddButton from './AddButton';
import HoursViewSection from './HoursViewSection';

const HoursView = props => {
  const { sections } = props;

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
