import supertest from "supertest";
import app from "../index";

const request = supertest(app)
// http://localhost:3000/
describe('Testing the ENDPOINT is work',() => {
    it('Test main routs / return is work Done', async () => {
        await request.get('/').expect(200);
    })

    it('Testing Endpoint reach route /image', async () =>{
        await request.get('/image').expect(200);
    })

    it('Tesing Not reach wrong name for routs', async () => {
        await request.get('/images').expect(404);
    })

    
})