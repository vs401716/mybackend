const express = require('express');
const app = express.Router();
// app.get('/missingNumber', (req, res) => {
//     const arr = [1, 2, 3, 5, 6, 7];
//     let missingNumber = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] + 1 !== arr[i + 1]) {
//             missingNumber = arr[i] + 1;
//             break;
//         }
//     }
//     res.send(`The missing number is ${missingNumber}`);
// });
app.get('/missingNumber', (req, res) => {
const arr = [1, 2, 3, 5, 6, 7];

let missingNumber = 0;
let sn = arr.lenght(arr.length+1)/2
let sa = 1+2+3+5+6+7
missingnumber = sa-sn
res.send(`The missing number is ${missingNumber}`);
});
module.exports = app;