


function addServiceListeners() {
    const items = document.querySelectorAll('.services .item');
    items.forEach((item) => {
        item.addEventListener('click', () => {serviceClicked(item)});
    })
}



function serviceClicked(e) {
    //get parent
    //set siblings to 0 width
    
    const parent = e.parentElement;

    for (let i=0; i<parent.children.length; i+=1) {
        const c = parent.children[i];
        c.classList.remove('active');
    }
    e.classList.add('active');
}


export {addServiceListeners};