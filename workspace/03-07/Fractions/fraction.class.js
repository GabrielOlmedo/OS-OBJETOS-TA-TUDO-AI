export class Fraction {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    get canReduce() {
        for (let i = 2; i <= this._denominator; i++) {
            if (this._numerator % i === 0 && this._denominator % i === 0) {
                return true;
            }
        }
        return false;
    }
    plus(fracao) {
        if (this.denominator === fracao.denominator) {
            return (this._numerator + fracao.numerator) + '/' + (this._denominator);
        } else {
            const a = this._numerator * fracao.denominator;
            const b = this._denominator * fracao.numerator;
            return `${a + b} / ${this._denominator * fracao.denominator}`;
        }
    }
    reduce() {
        for (let i = 2; i < this.denominator; i++) {
            if (this.numerator % i === 0 && this.denominator % i === 0) {
                this._denominator = this._denominator / i;
                this._numerator = this._numerator / i;
            }
        }
        return false;
    }
    divide(fracao) {
        const a = this._numerator * fracao.denominator;
        const b = this._denominator * fracao.numerator;
        return a + '/' + b;
    }
    multiply(fracao) {
        const a = this._numerator * fracao.numerator;
        const b = this._denominator * fracao.denominator;
        return a + '/' + b;
    }
    greaterThan(fracao) {
        const a = this._numerator * fracao.denominator;
        const b = this._denominator * fracao.numerator;
        if (this._denominator === fracao.denominator) {
            if (this._numerator > fracao.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (a > b) {
                return true;
            } else {
                return false;
            }
        }
    }
    lessThan(fracao) {
        const a = this._numerator * fracao.denominator;
        const b = this._denominator * fracao.numerator;
        if (this._denominator === fracao.denominator) {
            if (this._numerator < fracao.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (a < b) {
                return true;
            } else {
                return false;
            }
        }
    }
    equals(fracao) {
        const a = this._numerator * fracao.denominator;
        const b = this._denominator * fracao.numerator;
        if (this._denominator === fracao.denominator) {
            if (this._numerator === fracao.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (a === b) {
                return true;
            } else {
                return false;
            }
        }
    }
    toString() {
        return this._numerator + '/' + this.denominator;
    }
}
