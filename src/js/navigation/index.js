

function scrollToLink(e) {
    e.preventDefault();
    
    const section =document.getElementById(e.target.href);
}

function navigate() {
    const links = [...document.querySelectorAll('.navigation a')];

    links.forEach((link)=> {
        link.addEventListener('click', scrollToLink);
    })
}