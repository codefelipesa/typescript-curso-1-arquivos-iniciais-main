export class Negociacao{
 
    constructor(
        private _data: Date, 
        readonly quantidade : number, 
        readonly valor: number)
        { }
    get volume(){return this.quantidade * this.valor} 
    get data(): Date{
        const data = new Date(this._data.getTime()) // Criamos uma copia da Data atual armazenando na const
        // Para que ela não possa ser alterada, e ser for vai ser alterada a data "cópia"
        return data}

} 
