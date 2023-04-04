let url = "https://www.google.com";

let regex = /^(https:\/\/)[a-zA-Z0-9\-\._]+(\.[a-zA-Z]+)+$/;

if (regex.test(url)) {
    console.log("Valid URL");
} else {
    console.log("Invalid URL");
}
