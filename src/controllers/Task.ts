import { Task } from "@entities/Task";

export class TaskController {

    constructor () { }

    async createTask (
        userId: String,
        stateId: String,
        description: String,
        deadline: Date
    ): Promise<Number> {
        const result = await Task.create({
            userId: userId,
            stateId: stateId,
            description: description,
            deadline: deadline || null
        });
        return !result[0] ? 1 : 0;
    }

    async listTasks (
        userId: String
    ): Promise<any> {
        return await Task.find({
            userId: userId
        });
    }

    async deleteTask (_id: String): Promise<Number> {
        const result = await Task.deleteOne({
            _id: _id
        });
        return result.deletedCount ? 1 : 0;
    }
}