const promocards = document.querySelectorAll('.promocard')
let page = 0
const arrows = document.querySelectorAll('.arrow')

function animacia() {

    setInterval(function () {
        let size = parseFloat(promocards[0].offsetWidth)
        console.log(page)
        if (page === 1) {
            for (let i = 0; i < promocards.length; i++) {
                promocards[i].style.transform = 'translateX(0px)'
                page = 0
            }
        }
        else {
            for (let i = 0; i < promocards.length; i++) {
                promocards[i].style.transform = `translateX(-${size}px)`
                page = 1

            }
        }

    }, 5000)

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function () {
            let size = parseFloat(promocards[0].offsetWidth)
            if (page === 1) {
                for (let i = 0; i < promocards.length; i++) {
                    promocards[i].style.transform = 'translateX(0px)'
                    page = 0
                }
            }
            else {
                for (let i = 0; i < promocards.length; i++) {
                    promocards[i].style.transform = `translateX(-${size}px)`
                    page = 1

                }
            }
        })
    }
}
animacia()

