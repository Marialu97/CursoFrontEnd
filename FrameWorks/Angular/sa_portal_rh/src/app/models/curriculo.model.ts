 export class Curriculo {

  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public idade: number,
    public endereco: string,
    public formacao: string,
    public telefone: string,
    public habilidades: string,
    public portfolio: string,
    public foto: string
  ) {}



  toMao(): {[key:string]:any} {
        return{
            cpf: this.id,
            nome: this.nome,
            email: this.email,
            idade: this.idade,
            endereco: this.endereco,
            formacao: this.formacao,
            telefone: this.telefone,
            habilidades: this.habilidades,
            portfolio: this.portfolio,
            foto: this.foto   
        };
    }

        static fromMap(map:any):Curriculo{
        const curriculo = new Curriculo(
            map.id,
            map.nome,
            map.email,
            map.idade,
            map.endreco,
            map.formacao,
            map.telefone,
            map.habilidades,
            map.portfolio,
            map.foto
        );

        return curriculo;
        
    }

 }
