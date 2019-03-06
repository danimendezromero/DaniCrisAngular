export class Group {
  //clase grupo
  constructor(
    public nom: string,
    public integrants: number

  ){
    this.nom = nom ? nom : 'default';
  }
}
