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