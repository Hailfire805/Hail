import {brad} from 'myFirstFunction.js';

const myFirstPromise = new Promise((resolve, reject) => {
    let condition = me["Pets"].length;
    if (condition == 2) {
        resolve("Success");
    } else {
        reject("Failed");        
    };
});

myFirstPromise.then((message) => {
    console.log(message);   
}).catch((message) => {
    console.log(message);
});