const dates = ["2024-1-20", "2024-2-20", "2026-3-20"];

function formatDates(element)
{
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);


/* 
const students = ["aaa", "bbb", "ccc"];

function upperCase(element)
{
  return element.toUpperCase();
}

const studentsUpper = students.map(upperCase);
console.log(studentsUpper); 
*/

/*
const numbers = [1,2,3,4,5];

function square(element)
{
  return Math.pow(element, 2);
}

const squares = numbers.map(square);
console.log(squares);
*/