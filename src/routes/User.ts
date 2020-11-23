import { UserController } from './../controllers/User';
const express = require('express');

export const userRouter = express.Router();
const controller = new UserController();

userRouter.post('/create', async (req: any, res: any) => {
    const body = req.body;
    const userRes = await controller.createUser(
        body.username,
        body.name,
        body.lastname,
        body.email,
        new Date(body.birthdate)
    );
    if (userRes === 0) {
        return res.json({ ans: 'Done' });
    } else {
        return res.status(500);
    }
});