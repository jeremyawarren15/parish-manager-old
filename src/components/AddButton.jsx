import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateHourDialog from './CreateHourDialog';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const AddButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab onClick={handleClickOpen} style={style} color="secondary">
        <AddIcon />
      </Fab>

      <CreateHourDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default AddButton;
