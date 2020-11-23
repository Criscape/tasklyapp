import { User } from "@entities/User";

export class UserController {

    constructor () { }

    async createUser (
        username: string,
        name: String,
        lastname: String,
        email: String,
        birthdate: Date
    ): Promise<Number> {
        const result = await User.create({
            username: username,
            name: name,
            lastname: lastname,
            email: email,
            birthdate: birthdate
        });
        return !result[0] ? 0 : 1;
    }
}