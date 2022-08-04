console.clear();
const meteoritu = [];

const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function generateRandomHexSimbol(){
    return hex[Math.floor(Math.random()*hex.length)];
}

for(let i=0;i<=11;i++){ 
    meteoritu.push(`#${generateRandomHexSimbol()}${generateRandomHexSimbol()}${generateRandomHexSimbol()}${generateRandomHexSimbol()}${generateRandomHexSimbol()}${generateRandomHexSimbol()}`);
    console.log(meteoritu[i]);
}