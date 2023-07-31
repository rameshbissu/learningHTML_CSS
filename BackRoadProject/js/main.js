


// *************** nav toggle *****************
// select button and links
const links = document.getElementById('nav-links');
const toggleBtn = document.getElementById('toggleBtn');
// add event listener
toggleBtn.addEventListener("click", () => {
    links.classList.toggle('show-links');
});


// ************* smooth scroll ***************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left:0,
            top:element.offsetTop,
            top:position,
            behavior:"smooth"
        });
    });
});
