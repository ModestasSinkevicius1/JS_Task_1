import { rand } from "./utilities.js";

console.clear();

//Task 1

console.log('Task 1:');

function Print(text){
    return text;
}

console.log(`   ${Print('Hello')}`);

//Task 2

console.log('Task 2:');

function Print2(text, row){
    for(let i = 0;i<row;i++)
        console.log(`   ${text}`);
}

Print2('Yo', 3);

//Task 3... Gone

//Task 4

console.log('Task 4:');

function CountNormalNumber(number){
    while((number%2 == 0)||(number == 2) && (number == 1)){
        if(number != 2){
            console.log(`   ${number}`);           
        }
        number /= 2;
    }
}

CountNormalNumber(4096**2);

//Task 5

console.log('Task 5:');

function arrayGenerator(min, max){
    let count = 0;
    const numbers = [];
    while(count < 100){
        let number = rand(min, max);
        if(number % 2 == 0)
        {
            numbers[count] = number;
            count++;
        }
    }

    let temp = 0;
    for(let j = 0;j<numbers.length-1;j++){
        for(let i = 1;i<numbers.length;i++){
            if(numbers[i-1]<numbers[i]){
                temp = numbers[i - 1];
                numbers[i - 1] = numbers[i];
                numbers[i] = temp;
            }
        }
    }

    return numbers;
}

console.log(arrayGenerator(33, 77));

//Task 6

console.log('Task 6:');

function arrayPrimaryNumberGenerator(min, max){
    let count = 0;
    const numbers = [];
    while(count < 100){
        let number = rand(min, max);
        if(number % 2 != 0)
        {
            numbers[count] = number;
            count++;
        }
    }

    let temp = 0;
    for(let j = 0;j<numbers.length-1;j++){
        for(let i = 1;i<numbers.length;i++){
            if(numbers[i-1]<numbers[i]){
                temp = numbers[i - 1];
                numbers[i - 1] = numbers[i];
                numbers[i] = temp;
            }
        }
    }

    return numbers;
}

console.log(arrayPrimaryNumberGenerator(333, 777));

//Task 7

console.log('Task 7:');

function generateArray2(){
    const arrayLength = rand(10, 20);
    const list = [];

    for(let i = 0;i<arrayLength;i++){
        if(i !== arrayLength - 1)
            list[i] = rand(0, 10);
        else{
            const list2 = new Array(arrayLength);
            for(let j = 0; j<arrayLength-1;j++){
                list2[j] = rand(10, 30);
            }
            list2[i] = 0;
            list[i] = list2;
        }
    }
    return list;
}

console.log(generateArray2());

//Task 8

console.log('Task 8:');

function removeIfNotSumToArray(list){
    for(let i = 0;i<list.length;i++){
        if(i !== list.length-1)
            if(list[i] !== list.length)
                console.log(list[i]);
        else{
            for(let j = 0;j<list.length;j++){
                if(list[i,j] !== list.length)
                    console.log(list[i][j]);
            }
        }
    }
    return list;
}

removeIfNotSumToArray(generateArray2());

//Task 9

console.log('Task 9:');

function addOddNumberToArray(){
    const list = [rand(1, 33), rand(1, 33), rand(1, 33)];

    let isEven = false;
    let step = 0;
    let iteration = 0;

    while(iteration < 1000){
        for(let i = 0 + step;i < list.length;i++){
            if(list[i] % 2 !== 0){
                isEven = true;         
                break;
            }
        }
        if(isEven){
            list.push(rand(1, 33))
            isEven = false;
            step += 3;
        }
        else{
            break;
        }
        iteration++;
    }
    return list;
}

console.log(addOddNumberToArray());

//Task 10

console.log('Task 10:');

function generateArray3(){
    const list = new Array(10);
    let average = 0;
    let avgCount = 0;
    let max = Infinity;

    for(let i = 0;i < list.length;i++){
        list[i] = new Array(10);
        for(let j = 0;j<list.length;j++){
            list[i][j] = rand(1, 100);
        }
        for(let j = 0;j<list.length;j++){
            if(list[i][j]%2 !== 0){
                average += list[i][j];
                avgCount++;
            }
        }
        if(avgCount !== 0){
            average /= avgCount;
        }
        if(avgCount !== 0 && average < 70){
            for(let j = 0;j<list.length;j++){
                if(list[i][j] < max){
                    max = list[i][j];
                }
            }
            for(let j = 0;j<list.length;j++){
                if(list[i][j]===max){
                    list[i][j] += 3;
                }
            }
        }
    }

    return list;
}

console.log(generateArray3());