"use strict";

//øvelse 5

// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";
// console.log(letters[4]);

//øvelse 7

const people = ["harry", "ron", "hermine"];
let result;

// her pusher jeg draco op i array
result = people.push("Draco");

// her bliver draco lavet som en string for sig selv uden for array
result = people.pop("Draco");

//pusher neville ind
result = people.push("neville");

//pusher luna ind i array
result = people.push("luna");

// udvælger de første 3 i array og viser dem
result = people.slice(0, 3);

// den rykker cho ind på plads 2  - som svarer til index plads 1
result = people.splice(1, 0, "cho");

//placere ginny på index plads 1 men som svarerv til plads er plads 2 -ov overtager pladsen fra der står der i forvejen
people[1] = "ginny";

//placere personerne som de sidste i array - tilføjer dem blot
result = people.push("fred", "george");

//viser hvilket index nr fred er i arrayet - nr 6
result = people.indexOf("fred");

//laver et nyt array af de sidste pushede???
result = people.splice(result, 1);

//sådan laver man array
const letters = Array.from("jannehjulerjensen");

// console.log(letters);

const str = "janne hjuler";

// split skaber et array med hele indhold.
const arr1 = str.split();

// console.log(arr1);

// console.log(result);
// console.log(people);

let number = 0;

const array = [];

init();

function init() {
  number += 1;

  array.unshift(number);

  console.log(array.slice(0, 9));

  setTimeout(init, 500);
}
