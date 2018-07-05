export class Busao {
    constructor(capacidade, tarifa) {
        // imutaveis:
        this._capacidade = capacidade;
        this._tarifa = tarifa;
        // mutaveis:
        this._passageiros = 0;
        this._disponivel = capacidade;
    }
    get capacidade() {
        return this._capacidade;
    }
    get tarifa() {
        return this._tarifa;
    }
    get passageiros() {
        return this._passageiros;
    }
    get caixa() {
        return this._caixa;
    }

    subiuPassageiro(n) {
        if (this._disponivel - n > 0) {
            this._disponivel -= n;
            this._passageiros += n;
            return 'O busão ainda tem lugar!'
        }
        else if (this._disponivel - n === 0) {
            this._disponivel -= n;
            this._passageiros += n;
            return 'O busão lotou!'
        }
        else  {
            return 'O busão lotou!';
        }
    }
    desceuPassageiro(n) {
        if (this._disponivel + n < this._capacidade) {
            this._disponivel += n;
            this._passageiros -= n;
            return 'O busão ainda tem lugar!'
        } else if (this._disponivel + n === this._capacidade) {
            this._disponivel += n;
            this._passageiros -= n;
            return 'O busão ta vazio!'
        } else {
            return 'O busão ta vazio!';
        }
    }
    valorCaixa() {
        return 'R$ ' + (this._passageiros * this._tarifa);
    }
    toString() {
        return 'O busão atualmente tem ' + this._passageiros + '/' + this._capacidade + ' passageiros e a sua tarifa custa ' + this._tarifa + '.';
    }
}
