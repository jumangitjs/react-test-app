import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import CustomCard from './CustomCard/CustomCard';

function App() {
  const [state, setState] = React.useState();

  const editState = e => {
    setState(e);
  }

  return (
    <div className="App">
      <p class="p1">Medirecords Front end Code Challenge</p>
      <p class="p2">Please try to implement following within one hour</p>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item>
          <CustomCard
            cardName="Input"
            cardSubHeader="Array"
            editState={editState}
            isInput={true}
          >
          </CustomCard>
        </Grid>
        <Grid item>
          <CustomCard
            cardName="Output"
            cardSubHeader="Double"
            initialTextValue={state}
        >
          </CustomCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
