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

// theres some files we don't want to add: node_modules (too big and unneeded), passwords (.env file)

// how can we tell git to ignore certain files and folders
// create a .gitignore file

// how do we use git?
// 1. git init (initializes the folder to be tracked by git and creates some hidden git files that we don't care about)
// 2. make a commit , how?
// we have to git add . first
// git commit -m "some message"

// how do we use github to create a new repo
// plus icon new repo
// choose a name click private and create repo
// how does our local git know about the github repo
// git remote add origin <link>
// git push origin master
