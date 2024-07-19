export const secretEmail = (email) => {
    const [username, domain] = email.split("@");
    const secretUser = username.substring(0, 2) + "*".repeat(username.length-2);
    return `${secretUser}@${domain}`;
    // console.log(splitEmail);
    // console.log(email);
}

export const readTime = (desc) => {
    // reading speed
    const avgReading = 225;

    // create a div and set its content to desc
    const div = document.createElement("div");
    div.innerHTML = desc.__html;

    // extract text content from the div
    const textContent = div.textContent || div.innerHTML;
    const words = textContent.trim().split(/\s+/);
    return Math.ceil(words.length / avgReading);
}


export const formatNum = (num) => {
    if (num >= 1e9)
      return (num / 1e9).toFixed(1) + "B";

    else if (num >= 1e6) 
      return (num / 1e6).toFixed(1) + "M";

    else if (num >= 1e3)
      return (num / 1e3).toFixed(1) + "K";
    
    else
      return num.toString();
};