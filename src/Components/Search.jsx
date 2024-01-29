import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search({ onChange }) {
  return (
    <Box>
      <TextField id="standard-basic" label="Search" variant="standard" placeholder='title seller location' onChange={(e) => { onChange({q: e.target.value})}} />
    </Box>
  );
}