function combineStrings(...strings)
{
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "aa", "bb");
console.log(fullName);



/*
function sum(...numbers)
{
  let result = 0;
  for(let number of numbers)
  {
    result += number;
  }
  return result;
}

const total = sum(1,2,3,4,5);
console.log(total);
*/