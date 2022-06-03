import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function ExpenceItem({item}) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div">
       Your total is ${item.total}
      </Typography>
      <Typography sx={{ mb: 1, display: 'flex', flexWrap: 'wrap' }} color="text.secondary">
       Description: {item.description}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default ExpenceItem

