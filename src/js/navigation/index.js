

function scrollToLink(e) {
    e.preventDefault();
    const link = e.target.getAttribute('data-link');
    
    if (!link) return;
    const section =document.getElementById(link);
    //scroll to section
    window.scrollTo({
        left: 0,
        top: (window.pageYOffset + section.getBoundingClientRect().top - 44),
        behavior: 'smooth'
    });

    //push state history
    
    const name = link === 'home' ? `#${document.querySelector('.hidden-tooth').innerText}` : `#${link}`;
    console.log(name, link, link === 'home')
    history.pushState({},'', name);

}

function navigate() {
    const links = [...document.querySelectorAll('.navigation a')];

    links.forEach((link)=> {
        link.addEventListener('click', scrollToLink);
    })
}



export {navigate};