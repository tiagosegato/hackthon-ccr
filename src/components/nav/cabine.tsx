import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './Nav.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Cabines() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
    setError(false);
  };

  return (
    <form>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <div className="horario"><FormControlLabel value="CABINE KBN-51" control={<Radio />} label="CABINE KBN-51" /></div>
          <div className="horario"><FormControlLabel value="CABINE KBN-52" control={<Radio />} label="CABINE KBN-52" /></div>
          <div className="horario"><FormControlLabel value="CABINE KBN-53" control={<Radio />} label="CABINE KBN-53" /></div>
        </RadioGroup>
      </FormControl>
    </form>
  );
}
