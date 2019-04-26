//import throttle from 'lodash.throttle';
const clone = document.querySelector('.tooth');
const teeth = [];
function trail(e) {
    
    const coord = {
        x : e.pageX,
        y : e.pageY 
    }

    const tooth = clone.cloneNode(true);
    tooth.style.left = coord.x + 'px';
    tooth.style.top = coord.y + 'px';
    
    document.body.appendChild(tooth);
    teeth.push(tooth);

    if (teeth.length > 50) {
        document.body.removeChild(teeth[0]);
        teeth.splice(0, 1);
    }
    console.log(teeth.length);
}


function beginTrail() {
    /* 
    throttled function

    document.addEventListener('mousemove', 
        throttle((e)=>{
            console.log('throttle')
            trail(e);
        }, 50));
    */
    
    if (window.innerWidth > 1000) {
        document.addEventListener('mousemove', trail);
    }
    
}

export {beginTrail}