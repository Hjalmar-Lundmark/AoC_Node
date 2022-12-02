const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input02.txt'), 'utf-8');

let points = 0;
let pointsP2 = 0;
let i = 0;

while(true) {


    if (i >= data.length) {
        break;
    }
}

console.log(points);
console.log(pointsP2);
console.log(data);
