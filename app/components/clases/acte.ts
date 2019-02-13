import { Group } from '../clases/group';

export class Acte {
  constructor(
    public numero: number,
    public hora_inici: Date,
    public hora_fi: Date,
    public group: Group
  ){}
}
