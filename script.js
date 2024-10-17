const photo = document.querySelector('.photoCli')
const card = document.querySelector('.card')

photo.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector("HEADER").style.opacity = 0;
    document.querySelector("MAIN").style.opacity = 0;
    card.style.opacity = 1;
});
card.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector("HEADER").style.opacity = 1;
    document.querySelector("MAIN").style.opacity = 1;
    card.style.opacity = 0;
})