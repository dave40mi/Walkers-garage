document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(
".card, .product-card, .feature"
);

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
}

});

},{
threshold:0.2
});

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "all 0.8s ease";

observer.observe(card);

});

});
