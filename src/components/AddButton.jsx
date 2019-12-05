import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const AddButton = () => (
  <Fab style={style} color="secondary">
    <AddIcon />
  </Fab>
);

export default AddButton;
