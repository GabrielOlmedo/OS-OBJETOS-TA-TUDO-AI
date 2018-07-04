import {Fraction} from './fraction.class.js';
// Fraction(numerator, denominator)
const fr = new Fraction(3, 4); // para representar "três quartos"
console.log(fr.numerator === 3);
console.log(fr.denominator === 4);
console.log(fr.toString()); // imprime, por exemplo: "3/4"
console.log(fr.toString() === '3/4');
// as seguintes linhas não devem funcionar
// fr.numerator = 10;
// fr.denominator = 10;
// -----------------------

const f1 = new Fraction(4, 15);
console.log(f1.toString() === '4/15');

const f2 = new Fraction(5, 15);
console.log(f2.toString() === '5/15');

const f3 = f1.plus(f2); // representaria uma situação de: f1 + f2
console.log(f3.toString()); // imprime "9/15"
console.log(f3.toString() === '9/15');
// TODO: mais 3 casos de teste com plus
// --------------------------------------------------------------------
// teste 1
const fp1 = new Fraction(5, 2);
const fp2 = new Fraction(6, 2);
const fp3 = fp1.plus(fp2);
console.log(fp3.toString()); // 11/2
// teste 2
const fp4 = new Fraction(5, 2);
const fp5 = new Fraction(17, 9);
const fp6 = fp4.plus(fp5);
console.log(fp6.toString()); // 79/18
// teste 3
const fp7 = new Fraction(2, 7);
const fp8 = new Fraction(4, 6);
const fp9 = fp7.plus(fp8);
console.log(fp9.toString()); // 40/42
// --------------------------------------------------------------------
const f4 = new Fraction(1, 3);
console.log(f4.canReduce); // imprime false
console.log(f4.canReduce === false);

const f5 = new Fraction(9, 15);
console.log(f5.canReduce); // imprime true
console.log(f5.canReduce === true);

f5.reduce();
console.log(f5.toString() === '3/5');
console.log(f5.canReduce === false);
// TODO: escreva mais 3 casos de teste com reduce
// --------------------------------------------------------------------
// teste 1
const fr1 = new Fraction(2, 40);
fr1.reduce();
console.log(fr1.toString() === '1/20');
// teste 2
const fr2 = new Fraction(3, 6);
fr2.reduce();
console.log(fr2.toString() === '1/2');
// teste 3
const fr3 = new Fraction(15, 9);
fr3.reduce();
console.log(fr3.toString() === '5/3');
// --------------------------------------------------------------------
const f6 = new Fraction(25, 4);
const f7 = new Fraction(2, 5);

const f8 = f6.divide(f7);
console.log(f8); // imprime "125/8"
// TODO: escreva mais 3 casos de teste com divide
// --------------------------------------------------------------------
// teste 1
const fd1 = new Fraction(5, 2);
const fd2 = new Fraction(17, 9);
const fd3 = fd1.divide(fd2);
console.log(fd3.toString() === '45/34');
// teste 2
const fd4 = new Fraction(7, 3);
const fd5 = new Fraction(8, 2);
const fd6 = fd4.divide(fd5);
console.log(fd6.toString() === '14/24');
// teste 3
const fd7 = new Fraction(6, 1);
const fd8 = new Fraction(3, 5);
const fd9 = fd7.divide(fd8);
console.log(fd9.toString() === '30/3');
// --------------------------------------------------------------------
const f9 = new Fraction(3, 7);
const f10 = new Fraction(2, 3);

const f11 = f9.multiply(f10);
console.log(f11.toString()); // imprime "6/21"
console.log(f11.toString() === '6/21'); // imprime "6/21"
// TODO: escreva mais 3 casos de teste com multiply
// --------------------------------------------------------------------
// teste 1
const fm1 = new Fraction(6, 2);
const fm2 = new Fraction(2, 8);
const fm3 = fm1.multiply(fm2);
console.log(fm3.toString() === '12/16');
// teste 2
const fm4 = new Fraction(12, 7);
const fm5 = new Fraction(4, 9);
const fm6 = fm4.multiply(fm5);
console.log(fm6.toString() === '48/63');
// teste 3
const fm7 = new Fraction(8, 14);
const fm8 = new Fraction(6, 3);
const fm9 = fm7.multiply(fm8);
console.log(fm9.toString() === '48/42');
// --------------------------------------------------------------------
const f12 = new Fraction(7, 8);
const f13 = new Fraction(2, 5);

console.log(f12.greaterThan(f13)); // imprime "true"
console.log(f12.greaterThan(f13) === true);
console.log(f12.lessThan(f13)); // imprime "false"
console.log(f12.lessThan(f13) === false);
console.log(f12.equals(f13)); // false
console.log(f12.equals(f13) === false);

const f14 = new Fraction(2, 3);
const f15 = new Fraction(12, 36);
const f16 = new Fraction(1, 3);
// TODO: escreva mais 9 casos de teste com greaterThan, lessThan e equals
// --------------------------------------------------------------------
console.log(f14.greaterThan(f15));
console.log(f14.greaterThan(f16));
console.log(f14.lessThan(f15));
console.log(f14.lessThan(f16));
console.log(f14.equals(f15));
console.log(f14.equals(f16));
console.log(f14.equals(f14));
console.log(f15.greaterThan(f16));
console.log(f15.lessThan(f16));
// --------------------------------------------------------------------
const f17 = new Fraction(4);
// TODO: escreva casos de teste para o valor que se espera de f17
console.log(f17.toString() === '4/undefined');
const f18 = new Fraction();
// TODO: escreva casos de teste para o valor que se espera de f18
console.log(f18.toString() === 'undefined/undefined');
