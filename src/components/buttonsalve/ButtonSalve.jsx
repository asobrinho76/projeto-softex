import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';



    const theme = createTheme({
      palette: {
        primary: {
          main: '#F7934C',
          contrastText: '#FFFFFF',
        },
      },
    });
    
    export default function ButtonSalve({text}) {
      return (
        <ThemeProvider theme={theme} >
          <Button variant="contained" color="primary" className='buttonSalve' style={{marginTop: '10px', marginRight:'auto', marginLeft: 'auto'}}>
            {text}
          </Button>
        </ThemeProvider>
      );
    }