var btn = document.querySelector(".no");
var position
btn.addEventListener("click", function() {
position ? (position = 0) : (position = 120);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

var btn = document.querySelector(".no");
var position
btn.addEventListener("mouseover", function() {
position ? (position = 0) : (position = 150);
btn.style.transform = `translate(${position}px,0px)`;
btn.style.transition = "all 0.3s ease";
});

function tanks() {
alert("Obrigado por aceitar me aturar por mais 1 ano, EU TE AMOOO S2");
}    