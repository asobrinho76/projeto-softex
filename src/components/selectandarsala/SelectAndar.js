import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
  {
    value: "0",
    label: 'Mezanino',
  },
  {
    value: '1',
    label: '1º Andar',
  },
  {
    value: '2',
    label: '2º Andar',
  },
  {
    value: '3',
    label: '3º Andar',
  },
  {
    value: '4',
    label: '4º Andar',
  },
  {
    value: '5',
    label: '5º Andar',
  },
  {
    value: '6',
    label: '6º Andar',
  },
];

export default function SelectAndar() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="andar"
          select
          label="Andar"
          defaultValue=""
          helperText="Selecione um andar"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}