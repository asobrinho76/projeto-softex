import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function Select({label}) {
  const andar = [
    { value: 0, label: 'Mezanino', Salas:[]},
    { value: 1, label: '1º andar', Salas:[101,102,103] }
    ]

  const defaultProps = {
    options: andar,
    getOptionLabel: (option) => option.label,
  };
  
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <Stack spacing={1} sx={{ margin:"10px", marginLeft:'15%', width: '70%'}}>
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label={label} valeu={value} variant="outlined" onChange={handleChange} />
          
        )}
      />
    </Stack>
  );
}
