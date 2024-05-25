const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber    = true;
const includeSymbols   = true;

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbols)
{
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:";

  let allowChars = "";
  let password = "";

  allowChars += includeLowercase ? lowercaseChars : "";
  allowChars += includeUppercase ? uppercaseChars : "";
  allowChars += includeNumber    ? numberChars    : "";
  allowChars += includeSymbols   ? symbolChars    : "";

  if(passwordLength <= 0)
  {
    return `(password length must be at least 1)`;
  }
  if(allowChars.length === 0)
  {
    return `(At least 1 set of character needs to be selected)`;
  }
  for(let i=0; i<passwordLength; i++)
  {
    const randomIndex = Math.floor(Math.random()*allowChars.length);
    password += allowChars[randomIndex];
  }

  return password;
}

const password = generatePassword(passwordLength, 
                                  includeLowercase, includeUppercase, 
                                  includeNumber, includeSymbols);

console.log(`Generated password: ${password}`);