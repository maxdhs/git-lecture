// node?
// JavaScript runtime environment
// javascript code will execute outside of the browser
// we can use javascript to build servers that run on the operating system
// through a part of node called npm we can - node package manager
// we can download other peoples code so we don't have to reinvent wheel every time

// mock technical interview practice

// i want a function whos input is a number and whos output is a boolean that tells me if the number is odd. and i want the function to be called isOdd

// to download packages from npm first we have to create a node project (npm init -y) => package.json

// after we ran npm i is-odd it created a node_modules folder.

// theres two different systems of import and export in javascript land. common js (node) and es6 modules (browser)

// to reinstall node_modules the command is npm i

// function isOdd(num) {
//   if (num % 2 === 0) {
//     return false;
//   }
//   return true;
// }

import isOdd from "is-odd";

console.log(isOdd(14));

// git - system for version control (local)
// does real good saving your code different versions
// you decide when to save (called a commit)
// collaboration
// github - remote storage for our repos (saved code)

// how do we use git?
// 1.
