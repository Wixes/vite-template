import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { getTesting, putTesting } from '@api/client';

import './App.css';

function App() {
  const [putData, setPutData] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const loadMock = () => {
    setLoading(true);
    const promise1: Promise<Response> = getTesting();
    const promise2: Promise<Response> = putTesting();
    const promises = [promise1, promise2].map((pr) => pr.then((res) => res.json()));
    Promise.all(promises)
      .then(([res1, res2]) => {
        setData(res1);
        setPutData(res2);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log('TEST: data: ', data);
  }, [data]);

  useEffect(() => {
    console.log('TEST: putData: ', putData);
  }, [putData]);

  return (
    <div>
      <Button onClick={loadMock} variant={'contained'}>
        Load mock
      </Button>
      {loading && <h4>Loading...</h4>}
    </div>
  );
}

export default App;
