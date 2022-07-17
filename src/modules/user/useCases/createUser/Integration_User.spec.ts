/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest';

import { app } from '@shared/infra/app';

describe('Users', () => {
  it('Should be able to create a new user', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'user-name',
        email: 'user-email',
      });

    expect(response.status).toBe(201);
  });

  it('Should not be able to create an existing user', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        name: 'user-name',
        email: 'user-email',
      });

    expect(response.status).toBe(400);
  });
});
