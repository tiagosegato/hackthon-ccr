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

export default function ErrorRadios() {
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
          <div className="horario"><FormControlLabel value="Quarta-Feira 14:30" control={<Radio />} label="Quarta-Feira  14:30" /></div>
          <div className="horario"><FormControlLabel value="Quarta-Feira 15:00" control={<Radio />} label="Quarta-Feira 15:00" /></div>
          <div className="horario"><FormControlLabel value="Quarta-Feira 17:00" control={<Radio />} label="Quarta-Feira 17:00" /></div>
        </RadioGroup>
      </FormControl>
    </form>
  );
}
