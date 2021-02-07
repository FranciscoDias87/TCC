import 'date-fns'
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { Grid } from '@material-ui/core';



const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        contaimer
        justify='space-around'
      >
        <KeyboardDatePicker
          margin='normal'
          format='dd/MM/yyyy'
          id='calendario'
          label='Selecione uma Data'
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'arial-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default Calendario;