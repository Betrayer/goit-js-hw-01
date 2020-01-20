'use strict'; 

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;   

const password = prompt('Please, enter your password');

if(password === ADMIN_PASSWORD) {
    console.log(message = 'Hello there!');
} else if(password === null) {
    console.log(message = 'Canceled by user.');
} else {
    console.log(message ='Access denied!');
};
alert(message);