import throttle from 'lodash.throttle';
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
}

function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

function beginTrail() {
    document.addEventListener('mousemove', (e)=>{throttle(trail(e), 150)})
}

export {beginTrail}