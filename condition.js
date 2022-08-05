import { rand } from "./utilities.js";

console.clear();

//Task 1

let egzaminoRezultatas = rand(1, 10);

console.log('Task 1: ');
if(egzaminoRezultatas >= 4)
    console.log('   Egzaminas islaikytas BALAS: ' + egzaminoRezultatas);
else
    console.log('   Egzaminas neislaikytas BALAS: ' + egzaminoRezultatas);

//Task 2

let eksperimentoRezultatas = rand(1, 4);

console.log('Task 2: ');
if(eksperimentoRezultatas === 4 || eksperimentoRezultatas === 1)
    console.log('   Eksperimentas pavyko: ' + eksperimentoRezultatas);
else
    console.log('   Eksperimentas nepavyko: ' + eksperimentoRezultatas);

//Task 3

let automobilioGreitis = rand(40, 125);

console.log('Task 3: ');
if(automobilioGreitis > 60)
    console.log(`   Greitis virsytas, bauda israsyta: ${automobilioGreitis * 5}€`);
else
    console.log(`   Greitis nevirsytas`);

//Task 4

let eilesNumeris = rand(1, 30);

console.log('Task 4: ');
if(eilesNumeris%2 !== 0) 
    console.log(`   ${eilesNumeris} tai neporine eile`);
else
    console.log(`   ${eilesNumeris} tai porine eile`);

//Task 5

let raideABC;

console.log('Task 5: ');
if(rand(0, 2) === 0)
    raideABC = 'A';
else if(rand(0, 2) === 0)
    raideABC = 'B';
else
    raideABC = 'C';

console.log(raideABC);

//Task 6

let pirmas = rand(0, 2);
let antras = rand(0, 2);

const suma = pirmas * antras;
const sandauga = pirmas * antras;

console.log('Task 6: ');
if(sandauga <= 0 || suma <= 0)
    console.log(`   Nera didesnio skaiciau suma: ${suma} \r\n   Nera didesnio skaiciau sandauga: ${sandauga}`);
else
    console.log(`   Yra didesnio skaiciaus suma: ${suma} \r\n   Yra didesnio skaiciaus sandauga: ${sandauga}`);

//Task 7

let asilai = rand(0, 2);
let karves = rand(0, 2);

console.log('Task 7: ');
if(asilai <= 0 && karves <= 0)
    console.log(`   Gyvuliu nera: ${asilai} (asilas) ir ${karves} (karve)`);
else
    console.log(`   Gyvuliu yra: ${asilai} (asilas) ir ${karves} (karve)`);

//Task 8

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);

console.log('Task 8: ');
if(dalyvis1 + dalyvis2 >= 6 || dalyvis1 === dalyvis2)
    console.log(`   Laimejo: ${dalyvis1} (dalyvis 1) ir ${dalyvis2} (dalyvis 2)`);
else
    console.log(`   Pralaimejo: ${dalyvis1} (dalyvis 1) ir ${dalyvis2} (dalyvis 2)`);

//Task 9

let daug = rand(1000000, 9999999);

console.log('Task 9: ');
let neraLiekana = false;

if(daug % 5 === 0){
    console.log(`   ${daug} dalinasi be liekanos is 5`);
    neraLiekana = true;
}
if(daug % 10 === 0){
    console.log(`   ${daug} dalinasi be liekanos is 10`);
    neraLiekana = true;
}
if(daug % 33 === 0){
    console.log(`   ${daug} dalinasi be liekanos is 33`);
    neraLiekana = true;
}
if(!neraLiekana)
    console.log(`   ${daug} nei vienas dalinasi be liekanos`);

//Task 10

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

console.log('Task 10: ');
if(as === 'popierius' && tu === 'zirklės')
    console.log(`   Tu laimejai ${as} / ${tu}`);
else if(as === 'popierius' && tu === 'akmuo')
    console.log(`   As laimejau ${as} / ${tu}`);
else if(as === 'zirklės' && tu === 'akmuo')
    console.log(`   Tu laimejai ${as} / ${tu}`);
else if(as === 'zirklės' && tu === 'popierius')
    console.log(`   As laimejau ${as} / ${tu}`);
else if(as === 'akmuo' && tu === 'popierius')
    console.log(`   Tu laimejai ${as} / ${tu}`);
else if(as === 'akmuo' && tu === 'zirklės')
    console.log(`   As laimejau ${as} / ${tu}`);
else
    console.log(`   Lygiosios ${as} / ${tu}`);
