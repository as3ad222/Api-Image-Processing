import path from "path";
import supertest from "supertest";
import app from "../../index";
import resizeImage from "../../utilities/imageProcess";


const request = supertest(app);

const filePathFullImage = path.resolve(__dirname, '../../../full/santamonica.jpg');
const filePathThumbImage = path.resolve(__dirname, '../../../full/thumbnails/santamonica.jpg');

describe('Testing logic file is workin all functinality', () =>{
    it('Test Endpoint get data from logic file expect return 200', async () => {
        await request.get('/image?filename=santamonica&width=200&height=200').expect(200)
    });

    it('Testing Added Types for filename return 400', async() =>{
        await request.get('/image?filename=santamonica.jpg&width=200&height=200').expect(400)
    });

    it('Testing file not existing  return error 404', async () => {
        await request.get('/image?filename=fakepic&width=200&height=200').expect(404)
    })

    it('Tesing image convert is working expect return 200',async () => {
            await resizeImage(filePathFullImage, 200, 200,filePathThumbImage);
            expect(200)
    })        
})
