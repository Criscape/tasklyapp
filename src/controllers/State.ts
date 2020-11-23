import { State } from "@entities/State";

export class StateController {

    constructor () { }

    async listStates (): Promise<any> {
        return await State.find();
    }
}