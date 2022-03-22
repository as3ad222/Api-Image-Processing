import express from "express";
import resizeImage from "../../utilities/imageProcess";
import path from 'path';
import {checkType, createDir, fileExists} from '../../utilities/fileProcess'


const image = express.Router();

image.get('/', async(req: express.Request, res: express.Response) => {
    const {filename, width, height}= req.query;
    const imgLocation = path.resolve('./') + `/full/`;
    const outDir = imgLocation + 'thumbnails/';
    const outFile = `${imgLocation}${filename}.jpg`;

    if(Object.keys(req.query).length === 0){
        return res.status(200).send("Congratulation for connect to server images");
    }

    if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))){
        return res.status(400).send("Error, need add parameter");
    }
    
    // if (filename === undefined) {
    //     return res.status(400).send(`Bad request, query filename ${filename} is required`);
    // }
    if(checkType(String(filename))){
        return res.status(400).send("Error, filename must be remove extension");
    }

    if (!fileExists(outFile)) {
        return res.status(404).send(`Error, Page not found`);
    }

    if (!fileExists(outDir)) {
        createDir(outDir);
    }

    // if(existsSync(imgLocation)=== false) {
    //     return res.status(404).send('File is not found ')
    // }
    const outImage = outDir + `${filename}-thumbnail-${width}x${height}.jpg`;
    if (fileExists(outImage)){
        res.sendFile(outImage);
    } else {
        await resizeImage(outFile, Number(width), Number(height), outImage);
        res.sendFile(outImage);
    }
});

export default image;

