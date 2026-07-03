console.log(sessionStorage);

sessionStorage.setItem("name", "Abdulloh");
sessionStorage.setItem("age", "20");

console.log(sessionStorage.length);


const data = setInterval(() => {
    const data = new Date();
    console.log(data);
}, 1000);


setTimeout(() => {
    clearInterval(data);
}, 3000);

