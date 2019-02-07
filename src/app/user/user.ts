export default class User {
    _id: number;
    name: string;
    password: string;

    constructor(
        _id: number,
        name: string,
        password: string
    ) {
        this._id = _id;
        this.name = name;
        this.password = password;
    }
}