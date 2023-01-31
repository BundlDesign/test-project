document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello world!!");

    const text = document.querySelector(".welcome");
    text ? text.innerHTML = "Hello world!" : "";
});