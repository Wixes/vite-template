import { useRouteError } from 'react-router-dom';

type TError = Error & {
  statusText?: string;
};

function Error() {
  const error = useRouteError() as TError;
  console.error('route error: ', error);

  return (
    <div>
      <h3>Oops!</h3>
      <p>Missing page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
