import { rand } from "./utilities.js";

console.clear();

//Task 1

let suma = 0;

console.log('Task 1: ');
for(let i = 0; i<3 ;i++){
    const a = rand(5,25);
    suma += a;
}
console.log('   Suma: ' + suma);

let junginys = '';
for(let i = 0; i<3 ;i++){
    const a = rand(5,25) + '';
    junginys += a;
}
console.log('   Junginys: ' + junginys + ' (string)');

junginys = '';
for(let i = 0; i<3 ;i++){
    const a = rand(5,25) + ' ';
    junginys += a;
}
console.log('   Junginys: ' + junginys.substring(0, junginys.length - 1) + ' (string)');

junginys = '';
suma = 0;

for(let i = 0; i<3 ;i++){
    const a = rand(5,25);
    junginys += a + ' ';
    suma += a;
}
console.log('   Junginys: ' + junginys.substring(0, junginys.length - 1) + ' (string)' + ' Suma: ' + suma);

//Task 2

console.log('Task 2: ');
const random = rand(5, 25);
console.log(`   ${random}`);

//Task 3

console.log('Task 3: ');
const word = 'Labas';

for(let i = 0;i < 5; i++)
    console.log(`   ${word}`);

//Task 4

console.log('Task 4: ');
for(let i = 0;i<7;i++){
    console.log(`   ${random}`);
}

//Task 5

console.log('Task 5: ');
for(let i = 0;i<random;i++){
    console.log(`   ${random}`);
}

//Task 6

console.log('Task 6: ');
let row = 7;

if(row < random)
    row = random;

for(let i = 0;i<row;i++){
    console.log(`   ${random}`);
}

//Task 7

console.log('Task 7: ');
let random2 = 13;
suma = 0;
junginys = '';

for(let i = 0;i<5;i++){
    random2 = rand(10, 20)
    suma += random2;
    junginys += random2 + ' ';
    console.log(`   ${random2}`);
}
console.log(`   Suma: ${suma}`);
console.log(`   Junginys: ${junginys.substring(0, junginys.length - 1)} \r\n   Suma: ${suma}`);

//Task 8

console.log('Task 8: ');
let random3 = 13;
suma = 0;
junginys = '';
let iteration = 0;
let deniedCount = 0;
let even = 0;

while(random3 >= 12 && iteration < 20){
    random3 = rand(10, 25)
    if(random3 <= 18){
        suma += random3;
        junginys += random3 + ' ';
        console.log(`   ${random3}`);
    }
    else{
        console.log(`   ${random3} (denied)`);
        deniedCount++;
    }
    if(random3 % 2 === 0){
        even++;
    }

    iteration++;
}
console.log(`   Iteraciju: ${iteration}`);
console.log(`   Suma: ${suma} (Times denied: ${deniedCount})`);
console.log(`   Even: ${even} | Odd: ${iteration - even}`);

//Task 9

console.log('Task 9: ');
let random4 = 0;
iteration = 0;
let secondIteration = 0;
let encounter = 0;

while(random4 !== 5 || encounter < 3){
    random4 = rand(5, 10)
    for(let i = 0;i < random4; i++){
        secondIteration++;
    }
    if(random4 === 5){
        encounter++;
    }
    else
        encounter = 0;
    iteration++;
}

console.log(`   Iterations: ${iteration} Second iteration: ${secondIteration}`);

//Task 10

console.log('Task 10: ');

let petras = 0;
let scoreP = 0;

let kazys = 0;
let scoreK = 0;

while(scoreP < 222 && scoreK < 222){
    scoreP += rand(10, 20);
    scoreK += rand(5, 25);
}

console.log(`Petras: ${scoreP}`);
console.log(`Kazys: ${scoreK}`);
if(scoreP >= 222 && scoreP > scoreK)
    console.log(`   Partiją laimėjo: Petras`);
else
    console.log(`   Partiją laimėjo: Kazys`);

