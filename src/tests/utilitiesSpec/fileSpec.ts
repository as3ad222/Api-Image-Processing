import { join } from "path";
import  {fileExists} from "../../utilities/fileProcess";

describe('Testing for file Exist ', () =>{
    it('Testing fileExist is found Expected True', async () =>{
        expect(fileExists(join(__dirname, '../..'))).toBeTrue
    });

    it('Testing Not found files ', async () => {
        expect(fileExists(join(__dirname, 'thumb'))).toBeFalse
    })

    
})

