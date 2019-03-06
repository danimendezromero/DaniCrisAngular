import { Group } from '../clases/group';
//clase acto
export class Acte {
  constructor(
    public numero: number,
    public hora_inici: string,
    public hora_fi: string,
    public group: Group
  ){}

    static creatActes(){

    const g1 = new Group('BTS', 7);
    const g2 = new Group('Blackpink', 3);
    const g3 = new Group('Twice', 10);
    const g4 = new Group('EXO', 7);

    const a1 = new Acte(1,'sssdasd','sssdasd1', g1);
    const a2 = new Acte(2,'sssdasdw','sssdasd2', g2);
    const a3 = new Acte(3,'sssdasd3','sssdasd3', g3);
    const a4 = new Acte(4,'sssdasd4','sssdasd4', g4);

    const actes = [a1,a2,a3,a4];
    localStorage.setItem('actes',JSON.stringify(actes));
    return actes;
    }
}
