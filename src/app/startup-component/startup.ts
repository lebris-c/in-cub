import Consultant from "../consultant-component/consultant"
export default class Startup {
    id:number
    name: string
    activity: string
    official: string
    NbCofounder: number
    description: string
    adress: string
    consultant : Consultant
  
    constructor(id: number, name: string, activity: string, official: string, NbCofounder: number, description: string, adress: string,consultant : Consultant) {
      this.id = id
      this.name = name
      this.activity = activity
      this.official = official
      this.NbCofounder = NbCofounder
      this.description = description
      this.adress = adress
      this.consultant = consultant
    }
  }