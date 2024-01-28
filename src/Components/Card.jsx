import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.uuid}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <div style={{padding: 20}}>
        <TextField
          id="outlined-multiline-static"
          label="Опис"
          multiline
          rows={10}
          defaultValue={props.description}
          disabled
          />
           </div>
        <Typography variant="body2">
        {props.price}
        </Typography>
        <Typography variant="body2">
        {props.seller}
        </Typography>
        <Typography variant="body2">
        {props.location} {props.postedAt}
        </Typography>
      </CardContent>
    </Card>
  );
}