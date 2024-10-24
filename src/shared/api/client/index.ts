import { Api } from '@api/paths';

import { Tdate, User } from './types';

export function getTesting(): Promise<User> {
  return fetch(Api.testing).then((pr: Response) => pr.json());
}

export function putTesting(): Promise<Tdate> {
  return fetch(Api.testing, { method: 'PUT' }).then((pr: Response) => pr.json());
}
