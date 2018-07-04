export class ATM {
    constructor(numeroSerie) {
        // imutaveis:
        this._numeroSerie = numeroSerie;
        // mutaveis:
        this._dinheiro = [
            [5, 0],
            [10, 0],
            [20, 0],
            [50, 0],
            [100, 0]
        ];
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
    get valor() {
        let i = 0;
        for (const vcedulas of this._dinheiro) {
            i += vcedulas[0] * vcedulas[1];
        }
        return i;
    }

    cedulas(cedulas) {
        for (let i = 0; i < 5; i++) {
            if (this._dinheiro[i][0] === cedulas) {
                return this._dinheiro[i][1];
            }
        }
        return 0;
    }
    abastecer(notas, valor) {
        for (let i = 0; i < 5; i++) {
            if (this._dinheiro[i][0] === valor) {
                if (this._dinheiro[i][1] + notas <= 100) {
                    this._dinheiro[i][1] += notas;
                    notas = null;
                    break;
                }
            }
        }
    }

    retirar(valor) {
        let total = [];
        if (valor > this.valor) {
            return null;
        } else {
            for (let i = 4; i >= 0; i--) {
                for (let j = 0; j < 100; j++) {
                    if (this._dinheiro[i][0] <= valor && this._dinheiro[i][1]) {
                        this._dinheiro[i][1]--;
                        valor -= this._dinheiro[i][0];
                        total.push(this._dinheiro[i]);
                    }
                    if (valor === 0 || valor < this._dinheiro[1][0]) {
                        break;
                    }
                }
            }
            if (valor > 0) {
                for (const a of total) {
                    for (let k = 0; k <= 4; k++) {
                        if (this._dinheiro[k][0] === a[0]) {
                            this._dinheiro[k][1]++;
                        }
                    }
                }
            }
        }
    }
}
