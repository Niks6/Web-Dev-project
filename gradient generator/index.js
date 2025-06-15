let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#051937";
let rgb2 = "#008793";

const hexvalue = () => {
    let domain = "0123456789abcdef";
    let val = "#";
    for (let i = 0; i < 6; i++) {
        let r = Math.random() * 16;
        val = val + domain[Math.floor(r)];
    }
    return val;
};

const handleButton = () => {
    rgb1 = hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    btn1.innerText = `${rgb1}`;
    copyDiv.innerHTML =
        `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
    console.log(rgb1);
};

const handleButton2 = () => {
    rgb2 = hexvalue();
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    btn2.innerText = `${rgb2}`;
    copyDiv.innerHTML =
        `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
    console.log(rgb2);
}

btn1.addEventListener('click', handleButton);
btn2.addEventListener('click', handleButton2);

copyDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(copyDiv.innerText);
});