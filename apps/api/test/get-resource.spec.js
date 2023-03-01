const { beforeEach, describe, expect, it } = require('@jest/globals');
const request = require('supertest');

describe('GET /:id', () => {
	let req;

	beforeEach(() => {
		req = request('http://localhost:9999/.netlify/functions')
			.get('/resources/42')
			.set('Accept', 'application/json');
	});

	it('succeeds', (done) => {
		req.end((err, { statusCode }) => {
			if (err) {
				throw err;
			}

			expect(statusCode).toBe(200);
			done();
		});
	});

	it('responds with `application/json`', (done) => {
		req.end((err, { headers }) => {
			if (err) {
				throw err;
			}

			expect(headers['content-type']).toContain('application/json');
			done();
		});
	});

	it('responds with a resource', (done) => {
		req.end((err, { text }) => {
			if (err) {
				throw err;
			}

			const resource = JSON.parse(text);

			expect(resource).toHaveProperty('id');
			expect(resource).toHaveProperty('type', 'resource');
			done();
		});
	});
});
