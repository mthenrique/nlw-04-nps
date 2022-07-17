/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest';

import { app } from '@shared/infra/app';

describe('Surveys', () => {
  it('Should be able to create a new survey', async () => {
    const response = await request(app)
      .post('/survey')
      .send({
        title: 'test-title',
        description: 'test-description',
      });

    expect(response.status).toBe(201);
  });

  it('Should be able to get all surveys', async () => {
    await request(app)
      .post('/survey')
      .send({
        title: 'test-title',
        description: 'test-description',
      });

    const response = await request(app)
      .get('/survey');

    expect(response.body.length).toBe(2);
  });

  // it('Should be able to get survey by id'), async () => {
  //   await request(app)
  //     .post('/sendMail')
  //     .send({
  //       email: '',
  //       survey_id: '',
  //     });
  // };
});
