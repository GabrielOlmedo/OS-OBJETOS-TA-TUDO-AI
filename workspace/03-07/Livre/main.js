import {Busao} from "./busao.class.js";
const bus = new Busao(5,7)
console.log(bus.subiuPassageiro(2));
console.log(bus.passageiros);
console.log(bus.subiuPassageiro(3));
console.log(bus.passageiros);
console.log(bus.valorCaixa());
console.log(bus.subiuPassageiro(3));
console.log(bus.passageiros);
console.log(bus.desceuPassageiro(3));
console.log(bus.passageiros);
console.log(bus.valorCaixa());
console.log(bus.desceuPassageiro(2));
console.log(bus.passageiros);
console.log(bus.toString());
