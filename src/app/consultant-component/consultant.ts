export default class Consultant {
    id: number
    name: string
    surname: string
    description: string

  
    constructor(id: number, name: string, surname: string, description: string) {
      this.id = id
      this.name = name
      this.surname = surname
      this.description = description
    }
  }