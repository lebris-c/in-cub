import Consultant from "../consultant-component/consultant"
export default class Startup {
    id:number
    name: string
    activity: string
    official: string
    nbCofounder: number
    description: string
    address: string
    consultant : Consultant
  
    constructor(id: number, name: string, activity: string, official: string, NbCofounder: number, description: string, address: string,consultant : Consultant) {
      this.id = id
      this.name = name
      this.activity = activity
      this.official = official
      this.nbCofounder = NbCofounder
      this.description = description
      this.address = address
      this.consultant = consultant
    }
  }