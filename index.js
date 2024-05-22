let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

/*
x = "pizza"
y = "pizza"
z = "pizza"

NaN 'number'
pizza string
true 'boolean'

x = "0"
y = "0"
z = "0"

0 'number'
0 string
true 'boolean'

x = ""
y = ""
z = ""

0 'number'
string
false 'boolean'

x
y
z

NaN 'number'
undefined string
false 'boolean'
*/