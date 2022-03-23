import supertest from "supertest";
import app from "../../index";
import image from "../../routes/api/logic";


const request = supertest(app);

describe('Testing logic file is workin all functinality', () =>{
    it('Test Endpoint get data from logic file expect return 200', async () => {
        await request.get('/image?filename=santamonica&width=200&height=200').expect(200)
    });

    it('Testing Added Types for filename return 400', async() =>{
        await request.get('/image?filename=santamonica.jpg&width=200&height=200').expect(400)
    });

    it('Testing file not existing  return error 404', async () => {
        await request.get('/image?filename=fakpic&width=200&height=200').expect(404)
    })
})