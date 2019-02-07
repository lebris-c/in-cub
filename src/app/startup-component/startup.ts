import Consultant from "../consultant-component/consultant";
export default class Startup {
  _id: number;
  name: string;
  activity: string;
  official: string;
  nbCofounder: number;
  description: string;
  address: string;
  consultant: Consultant;

  constructor(
    _id: number,
    name: string,
    activity: string,
    official: string,
    NbCofounder: number,
    description: string,
    address: string,
    consultant: Consultant
  ) {
    this._id = _id;
    this.name = name;
    this.activity = activity;
    this.official = official;
    this.nbCofounder = NbCofounder;
    this.description = description;
    this.address = address;
    this.consultant = consultant;
  }
}
