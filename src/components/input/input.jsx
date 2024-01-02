import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomInput(props) {
  const { id, variant, ...otherProps } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {marginTop:"1em", width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} variant={variant} {...otherProps} />
    </Box>
  );
}
