import sharp from 'sharp';


const resizeImage = async(filename: string, width: number, height: number, outDir: string): Promise<void> => {
    await sharp(filename).resize(width, height).toFile(outDir);
};
export default resizeImage;