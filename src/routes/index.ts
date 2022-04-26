import express from "express";
import image from "./api/logic";

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.send('connected from main api routes');
});

routes.use('/image', image)

export default routes;