

window.onload = function () {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    var tabs = $$('.tab-content');
    var elementMenus = $$('.menu-item');
    var elementLine = $('.menu-line')
    var activeIndex = 0;

    elementLine.style.transition = ".5s";
    
    function setPositionLine(el, times=0){
        elementLine.style.width = el.offsetWidth + "px";
        elementLine.style.left =  el.offsetLeft + "px";
    }

    setPositionLine(elementMenus[activeIndex])
    
    elementMenus.forEach((menu) => {
        menu.onclick = function() {
            activeIndex = this.dataset.menuindex - 1;
            setPositionLine(elementMenus[activeIndex])

            // welche active werden zuerst remove 
            
            $('.tab-content.active').classList.remove('active') 
            $('.menu-item.active').classList.remove('active') 

            // active menu und tab
            menu.classList.add('active');
            tabs[activeIndex].classList.add('active')
        }
    });
}