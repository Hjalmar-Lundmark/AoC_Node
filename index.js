const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'input02.txt'), 'utf-8');

let points = 0;
let pointsP2 = 0;
let i = 0;
let line = "";

while(true) {
    line = "";
    for (let o = 0; o < 4; o ++) {
        line += data.charAt(i);
        i++;
    }
    
    if (line.includes("A")) {
        if (line.includes("X")) {
            points += 4;        //part1
            pointsP2 += 3;      //part2
        } else if (line.includes("Y")) {
            points += 8;
            pointsP2 += (1+3);
        } else {
            points += 3;
            pointsP2 += (2+6);
        }
    } else if (line.includes("B")) {
        if (line.includes("X")) {
            points += 1;
            pointsP2 += 1;
        } else if (line.includes("Y")) {
            points += 5;
            pointsP2 += (2+3);
        } else {
            points += 9;
            pointsP2 += (3+6);
        }
    } else {
        if (line.includes("X")) {
            points += 7;
            pointsP2 += 2;
        } else if (line.includes("Y")) {
            points += 2;
            pointsP2 += (3+3);
        } else {
            points += 6;
            pointsP2 += (1+6);
        }
    }

    if (i >= data.length) {
        break;
    }
}

console.log(points);
console.log(pointsP2);
