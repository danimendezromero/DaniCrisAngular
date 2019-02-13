export class Group {
  constructor(
    public nom: string,
    public integrants: number

  ){
    this.nom = nom ? nom : 'default';
  }
}
