import { Injectable } from "@angular/core";
import Startup from "./startup-component/startup";
import Consultant from "./consultant-component/consultant";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    let consultant1 = new Consultant(1, "Le Bris", "Corentin", "Bg du 29");
    let consultant2 = new Consultant(2, "Bouchard", "Alexandre", "Coran Corah Toran");
    let consultant3 = new Consultant(3, "Bernard", "Clément", "So Gay");
    const consultants = [consultant1, consultant2, consultant3];

    const startups = [
      new Startup(
        1,
        "D&A Business Development",
        "Business Development",
        "Vincent L.",
        1,
        "Spécialiste du Business Development, nous accompagnons nos clients (de la Start-Up à l'ETI) avec un ensemble de métiers opérationnels pour soutenir et développer le Chiffre d'Affaires.",
        "21 Avenue des Tulipes",
        consultant1
      ),
      new Startup(
        2,
        "AriadNEXT",
        "Editeur de solutions",
        "Lionel M.",
        3,
        "AriadNEXT édite depuis 2010, les solutions d’identification numérique automatisées les plus avancées. Nous offrons aux entreprises et gouvernements, la possibilité de nouer instantanément des relations de confiance avec leurs consommateurs et leurs citoyens en ligne.",
        "21 Avenue des Jonquilles",
        consultant2
      ),
      new Startup(
        3,
        "EKOLIS",
        "Informatique Embraquée",
        "Francky V.",
        2,
        "Expert de l'informatique embarquée pour semi-remorque",
        "21 Avenue des Coquelicots",
        consultant3
      ),
      new Startup(
        4,
        "Habiliv",
        "Editeur de logiciel",
        "Pascal O.",
        1,
        "Le 1er guide des villes de demain pour #vivre ou #investir. Habiliv offre les outils pour se projeter dans les villes du Grand Paris grâce à des informations transparentes, concrètes et positives.",
        "1 rue Lavande",
        consultant1
      ),
      new Startup(
        5,
        "DreaminzZz",
        "Objet connecté",
        "Gérard L.",
        2,
        "HYPNOS est le premier masque d'hypnose connecté qui vous aide à mieux dormir, mieux gérer le stress de la vie quotidienne et atteindre vos objectifs en toute autonomie.",
        "12 rue Lavande",
        consultant2
      )
    ];
    return { consultants, startups };
  }
  genId(startups: Startup[]): number {
    return startups.length > 0 ? Math.max(...startups.map(startup => startup.id)) + 1 : 11;
  }
  constructor() {}
}
