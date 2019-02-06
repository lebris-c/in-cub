export default class Consultant {
  idConsultant: number;
  name: string;
  surname: string;
  description: string;

  constructor(idConsultant: number, name: string, surname: string, description: string) {
    this.idConsultant = idConsultant;
    this.name = name;
    this.surname = surname;
    this.description = description;
  }
}
