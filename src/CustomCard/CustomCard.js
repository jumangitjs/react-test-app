import { Card, CardContent, Grid, TextField } from '@mui/material';
import React from 'react';
import './CustomCard.css';

function CustomCard({
  editState,
  initialTextValue = [],
  cardName,
  cardSubHeader,
  isInput = false
}) {
  let outputValue = '';

  const handleFormChange = (e) => {
    if (isInput) {
      editState(
        [...e.target.value.split(',')]
          .filter(a => !!a)
          .map(a => parseInt(a))
      );
    }
  };

  if (!isInput) {
    outputValue = initialTextValue
      .map(a => a * 2)
      .toLocaleString();
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid class="header" item>
            <span>
              {cardName}
            </span>
          </Grid>
          <Grid class="items" item>
            <span>{cardSubHeader}</span>
            {
              isInput
                ? <Grid item>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={handleFormChange}
                  />
                </Grid>
                : <Grid item>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={outputValue}
                  />
                </Grid>
            }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// function CustomCard(
//   cardName,
//   cardSubHeader,
//   inputContent
// ) {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <h3>
//           {cardName}
//         </h3>
//         <span>
//           {cardSubHeader}
//         </span>
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       </CardContent>
//     </Card>
//   );
// }

export default CustomCard;