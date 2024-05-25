function sum(callback, x, y)
{
  let result = x+y;
  callback(result);
}
function displayConsole(result)
{
  console.log(result);
}
function displayPage(result)
{
  document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);


/*
function hello(callback)
{
  //setTimeout(function(){console.log("Hello!");}, 3000);
  console.log("Hello!");
  callback();
}
function goodbye()
{
  console.log("Goodbye!");
}
function wait()
{
  console.log("Wait!");
}
function leave()
{
  console.log("Leave!");
}

hello(goodbye);
*/
