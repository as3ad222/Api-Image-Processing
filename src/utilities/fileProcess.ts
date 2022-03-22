import { existsSync, mkdirSync } from "fs";

const checkType = (fileName: string): boolean => {
    return fileName.includes(".jpg" || ".jpeg" || ".png" || ".gif"); 
  };
  
  const fileExists = (imgLocation: string): boolean => {
    return existsSync(imgLocation); 
  };
  
  const createDir = (dirLocation: string) : void => {
    return mkdirSync(dirLocation);
  }
  
  export { checkType, fileExists, createDir };
