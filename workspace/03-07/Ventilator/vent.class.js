export class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        // imutáveis:
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        // mutaveis:
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this._rpm = 0;
    }
    get watts() {
        return this._watts;
    }
    get brand() {
        return this._brand;
    }

    get minRPM() {
        return this._minRPM;
    }

    get maxRPM() {
        return this._maxRPM;
    }

    get on() {
        return this._on;
    }

    get off() {
        return this._off;
    }

    get velocity() {
        return this._velocity;
    }

    get rpm() {
        return this._rpm;
    }
    speedUp() {
        if (this.velocity === 0) {
            this._on = !this._on;
            this._off = !this._off;
        }
        if (this.velocity < 3 && this.velocity >= 0) this._velocity++;
        if (this.velocity === 1) this._rpm = this._minRPM;
        if (this.velocity === 2) this._rpm = (this._minRPM + this._maxRPM) / 2;
        if (this.velocity === 3) this._rpm = this._maxRPM;
    }
    slowDown() {
        if (this.velocity <= 3 && this.velocity > 0) this._velocity--;
        if (this.velocity === 1) this._rpm = this._minRPM;
        if (this.velocity === 2) this._rpm = (this._minRPM + this._maxRPM) / 2;
        if (this.velocity === 3) this._rpm = this._maxRPM;
        if (this.velocity === 0) {
            this._on = !this._on;
            this._off = !this._off;
        }
    }
    turnOff() {
        this._velocity = 0;
        this._rpm = 0;
        this._on = false;
        this._off = true;
    }
}
