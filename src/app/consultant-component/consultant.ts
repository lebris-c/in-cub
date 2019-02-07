export default class Consultant {
  _id: number;
  name: string;
  surname: string;
  description: string;

  constructor(_id: number, name: string, surname: string, description: string) {
    this._id = _id;
    this.name = name;
    this.surname = surname;
    this.description = description;
  }
}
