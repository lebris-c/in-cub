import Consultant from "../consultant-component/consultant";
export default class Startup {
  idStartup: number;
  name: string;
  activity: string;
  official: string;
  nbCofounder: number;
  description: string;
  address: string;
  consultantId: number;

  constructor(
    idStartup: number,
    name: string,
    activity: string,
    official: string,
    NbCofounder: number,
    description: string,
    address: string,
    consultantId: number
  ) {
    this.idStartup = idStartup;
    this.name = name;
    this.activity = activity;
    this.official = official;
    this.nbCofounder = NbCofounder;
    this.description = description;
    this.address = address;
    this.consultantId = consultantId;
  }
}
