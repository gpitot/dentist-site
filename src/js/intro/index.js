const PROD = false;

const animateProviders = (providers, cb) => {
    if (providers.length === 0) return cb();
    const p = providers[0];
    p.style.opacity = "1";
    p.style.transform = "translateY(0)";

    providers.splice(0, 1);
    setTimeout(()=>{animateProviders(providers, cb)}, 250);
}


function animate() {
    
    const intro = document.querySelector('.intro');
    const overlay = document.querySelector('.overlay-anim');
    const contact = document.querySelector('.contact-form');
    const providers = [...document.querySelectorAll('.providers .item')];
    if (PROD) {
    
        setTimeout(()=> {
            overlay.style.left = "100%";
            setTimeout(()=> {
                intro.querySelector('.logo').style.opacity = "0";
                intro.style.opacity = "0";
        
                setTimeout(() => {
                    intro.style.display = "none";
                    overlay.style.display = "none";
                    
                    
                    
                    animateProviders(providers, ()=>{
                        setTimeout(()=>{
                            contact.style.transform =  "translateX(0)";
                        }, 100);
                    });

                    
                    
                    
                }, 1000);
            },1700);
        }, 600)    
    } else {
        intro.style.display = "none";
        overlay.style.display = "none";
        contact.style.transform =  "translateX(0)";
        animateProviders(providers, ()=>{});
    }
}


export {
    animate
}