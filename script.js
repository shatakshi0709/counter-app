let i= document.getElementById("inc");
let d = document.getElementById("dec");
let r = document.getElementById("res");
let a = document.getElementById("counter");
let c=0;
i.addEventListener("click" , () => {
    c++;
    a.innerText = c;
})
d.addEventListener("click" , () => {
    c--;
    a.innerText = c;
})
r.addEventListener("click" , () => {
    c=0;
    a.innerText = c;
})
r.addEventListener("click" , () => {
    c=0;
    a.innerText = c;
})