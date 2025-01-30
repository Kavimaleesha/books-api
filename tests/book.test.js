const request = require('supertest');
const app = require('../src/app');

describe("Books API", () => {
    it("should return an empty book list", async () => {
        const res = await request(app).get('/books');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it("should add a new book", async () => {
        const res = await request(app)
            .post('/books')
            .send({ name: "1984", author: "George Orwell", publishedYear: 1949 });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("1984");
    });
});
