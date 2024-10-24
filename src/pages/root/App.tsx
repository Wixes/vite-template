import { useState } from 'react';

import { getTesting, putTesting } from '@api/client';
import { Tdate, User } from '@api/client/types';
import { Button, Grid2, Paper, Skeleton, Tooltip, Typography, useTheme } from '@mui/material';

import './App.css';

function App() {
  const [putData, setPutData] = useState<Tdate | null>(null);
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  const theme = useTheme();

  const loadMock = () => {
    setLoading(true);
    setData(null);
    setPutData(null);
    const promise1: Promise<User> = getTesting();
    const promise2: Promise<Tdate> = putTesting();
    Promise.all([promise1, promise2])
      .then(([res1, res2]) => {
        setData(res1);
        setPutData(res2);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Grid2 container spacing={1} direction={'column'}>
      <Grid2>
        <Button onClick={loadMock} variant={'contained'} disabled={loading}>
          Load mock
        </Button>
      </Grid2>
      {loading && (
        <Grid2>
          <Typography>Loading...</Typography>
          <Skeleton variant="rectangular" animation='wave' width={210} height={20} />
        </Grid2>
        )}
      {data && putData && (
        <Grid2>
          <Paper elevation={3} sx={{padding: theme.spacing(2)}}>
            <Grid2 container spacing={2}>
              <Grid2>
                <Typography>
                User: 
                </Typography>
              </Grid2>
              <Grid2>
            <Tooltip title={`purpose: ${data.purpose}`}>
            <Typography>{data.name}</Typography>
            </Tooltip>
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2}>
              <Grid2>
                <Typography>date:</Typography>
              </Grid2>
              <Grid2>
                {putData.date}
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
        )}

    </Grid2>
  );
}

export default App;
