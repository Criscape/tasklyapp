import { StateController } from './../controllers/State';
const express = require('express');

export const stateRouter = express.Router();
const controller = new StateController();

stateRouter.get('/list', async (req: any, res: any) => {
    const stateRes = await controller.listStates();
    return res.json(stateRes);
});