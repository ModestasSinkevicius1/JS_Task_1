console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Task 1

let answ = rand(0, 4)/rand(1, 4);

//If answ less than 1 It means we divided smaller number by larger which should not be allowed.
if(answ >= 1)
    console.log('Task 1: ',answ.toFixed(2));
else
    console.log('Task 1:  First number was smaller than second');

// Task 2

answ = (rand(0, 25) + rand(0, 25) + rand(0, 25))/3;
console.log('Task 2: ',answ.toFixed(2));

// Task 3

function isTriangleValid(a, b, c){
    return (a + b) > c ? 'Valid' : 'Invadid';
}

console.log('Task 3: ','Is triangle possible? ' + isTriangleValid(rand(1, 10), rand(1, 10), rand(1, 10)));

// Task 4

let zero = 0;
let one = 0; 
let two = 0;

for(let i = 0;i<4;i++){
    let value = rand(0, 2);
    if(value === 0)
        zero++;
    if(value === 1)
        one++;
    if(value === 2)
        two++;
}

console.log('Task 4: ', `zeros found: ${zero} | ones found: ${one} | twos found: ${two}`);

// Task 5

console.log('Task 5: ')

for(let i=0;i<3;i++){
    let value = rand(-10, 10);

    if(value > 0)
        console.log(`   +${value}+`)
    else if(value < 0)
        console.log(`   -${Math.abs(value)}-`)
    else
        console.log(`   *${value}*`)
}

// Task 6

const candle = rand(5, 3000);
let cost = candle;

if(candle >= 1000)
    cost -= candle * 0.03;
else if(candle >= 2000)
    cost -= candle * 0.04;

console.log('Task 6: ',`Buying ${candle} candles for ${cost}€`);

// Task 7

const answ1 = (rand(0, 100) + rand(0, 100) + rand(0, 100))/3;

let sum = 0;
let decCount = 3;

for(let i = 0;i<3;i++){
    let value = rand(0, 100);
    if(value => 10 && value <= 90)
        sum += value;
    else
        decCount--;
}
const answ2 = sum/decCount;

console.log('Task 7: ',`Average 1: ${answ1.toFixed(2)} | Average 2: ${answ2.toFixed(2)}`);