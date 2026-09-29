import { Produto } from "./produto";

export class ItemCesta {
    produto: Produto = new Produto();
    quantidade: number = 1;
    valorTotal: number = 0;

    constructor(p:Produto){
        this.produto = p;
        if(p.valorPromo>0) {
            this.valorTotal = p.valorPromo;
        } else {
            this.valorTotal = p.valor;
        }    
    }
}