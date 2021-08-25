window.addEventListener("DOMContentLoaded", ev => {

});

function lightMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "";
    h1.className = "";
    a.forEach(tag => tag.className = "");
    ul.className = "";
    button.className = "";
    li.forEach(tag => tag.className = "");
}

function darkMode() {
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const a = document.querySelectorAll("a");
    const ul = document.querySelector("ul");
    const button = document.querySelector("button");
    const li = document.querySelectorAll("li");
    body.className = "dark";
    h1.className = "dark";
    a.forEach(tag => tag.className = "dark");
    ul.className = "dark";
    button.className = "dark";
    li.forEach(tag => tag.className = "dark");
}