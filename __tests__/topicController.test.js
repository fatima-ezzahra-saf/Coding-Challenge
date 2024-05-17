const request = require('supertest');
const app = require('@pages/api/topics');

describe('PUT /api/topics/:id', () => {
  test('should update a topic', async () => {
    const topicId = '664736f5e349379c7f1a1075';
    const newData = { newTitle: 'AI updated', newDescription: 'new desc' };
    const response = await request(app)
      .put(`/api/topics/${topicId}`)
      .send(newData);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Topic updated');
  });
});

describe('DELETE /api/topics/:id', () => {
  test('should delete a topic', async () => {
    const topicId = '664736f5e349379c7f1a1075';
    const response = await request(app).delete(`/api/topics/${topicId}`);
    expect(response.status).toBe(200);
  });
});

describe('GET /api/topics/:id', () => {
  test('should get a topic by ID', async () => {
    const topicId = '664736f5e349379c7f1a1075';
    const response = await request(app).get(`/api/topics/${topicId}`);
    expect(response.status).toBe(200);
  });
});

