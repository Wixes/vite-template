import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  // api/testing GET
  http.get('api/testing', async () => {
    await delay(1000);
    return HttpResponse.json({
      id: '123',
      name: 'Dmitry',
      purpose: 'Testing API',
    });
  }),

  // api/testing PUT
  http.put('api/testing', async () => {
    await delay(1000);
    return HttpResponse.json({
      id: '123',
      date: new Date().toJSON(),
    });
  }),
];
