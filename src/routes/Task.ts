import { TaskController } from './../controllers/Task';
const express = require('express');

export const taskRouter = express.Router();
const controller = new TaskController();

taskRouter.post('/create', async (req: any, res: any) => {
    const body = req.body;
    const taskRes = await controller.createTask(
        body.userId,
        body.stateId,
        body.description,
        new Date(body.deadline || null)
    );
    return taskRes ? res.json({ ans: 'Done' }) : res.json({ ans: 'Error' });
});

taskRouter.get('/list/:userId', async (req: any, res: any) => {
    const userId = req.params.userId;
    const taskRes = await controller.listTasks(userId);
    return res.json(taskRes);
});

taskRouter.delete('/delete/:_id', async (req: any, res: any) => {
    const _id = req.params._id;
    const taskRes = await controller.deleteTask(_id);
    return taskRes ? res.json({ ans: 'Done' }) : res.json({ ans: 'Error' });
});

taskRouter.put('/update', async (req: any, res: any) => {
    const body = req.body;
    const taskRes = await controller.updateTask(
        body._id,
        body.userId,
        body.stateId,
        body.description
    );
    return taskRes ? res.json({ ans: 'Done' }) : res.json({ ans: 'Error' });
});