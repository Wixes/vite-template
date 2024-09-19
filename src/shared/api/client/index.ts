import { Api } from '@api/paths';

export function getTesting(): Promise<Response> {
  return fetch(Api.testing);
}

export function putTesting(): Promise<Response> {
  return fetch(Api.testing, { method: 'PUT' });
}
