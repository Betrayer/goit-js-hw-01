'use strict'; 

const ADMIN_PASSWORD = 'jqueryismyjam';

let message;   

const password = prompt('Please, enter your password');

if(password === ADMIN_PASSWORD) {
    (message = 'Hello there!');
} else if(password === null) {
    (message = 'Canceled by user.');
} else {
    (message ='Access denied!');
};
alert(message);