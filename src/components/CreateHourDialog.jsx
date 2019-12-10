import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const CreateHourDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
  const [requiredAdorers, setRequiredAdorers] = useState(0);
  const [labelWidth, setLabelWidth] = useState(0);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the following fields to enter a new hour for
          adoration.
        </DialogContentText>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Day
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={day}
            onChange={e => setDay(e.target.value)}
          >
            <MenuItem value={0}>Sunday</MenuItem>
            <MenuItem value={1}>Monday</MenuItem>
            <MenuItem value={2}>Tuesday</MenuItem>
            <MenuItem value={3}>Wednesday</MenuItem>
            <MenuItem value={4}>Thursday</MenuItem>
            <MenuItem value={5}>Friday</MenuItem>
            <MenuItem value={6}>Saturday</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Hour
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={time}
            onChange={e => setTime(e.target.value)}
          >
            <MenuItem value={0}>12PM-1AM</MenuItem>
            <MenuItem value={1}>1-2AM</MenuItem>
            <MenuItem value={2}>2-3AM</MenuItem>
            <MenuItem value={3}>3-4AM</MenuItem>
            <MenuItem value={4}>4-5AM</MenuItem>
            <MenuItem value={5}>5-6AM</MenuItem>
            <MenuItem value={6}>6-7AM</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="required adorers"
          label="Required Adorers"
          type="number"
          variant="filled"
          value={requiredAdorers}
          onChange={e => setRequiredAdorers(e.target.value)}
          placeholder="Contact phone number"
        />
        <TextField
          autoFocus
          margin="dense"
          id="location"
          label="Location"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleClose();
            setTimeout(() => {
              setDay(0);
              setTime(0);
            }, 500);
          }}
          color="primary"
        >
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateHourDialog;
