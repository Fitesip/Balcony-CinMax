const cards1 = document.querySelectorAll('.card1')
const wrapper1 = document.getElementById('wrapper1')
const arrows1 = document.querySelectorAll('.arrow1')
let page1 = 0

for (let g = 0; g < arrows1.length; g++) {
    arrows1[g].addEventListener('click', function () {
        let size = parseFloat(wrapper1.offsetWidth)
        if (page1 === 1) {
            for (let i = 0; i < cards1.length; i++) {
                cards1[i].style.transform = 'translateX(0px)'
                page1 = 0
            }
        } else {
            for (let i = 0; i < cards1.length; i++) {
                cards1[i].style.transform = `translateX(-${size}px)`
                page1 = 1
            }
        }
    })
}

const cards2 = document.querySelectorAll('.card2')
const wrapper2 = document.getElementById('wrapper2')
const arrows2 = document.querySelectorAll('.arrow2')
let page2 = 0

for (let g = 0; g < arrows1.length; g++) {
    arrows2[g].addEventListener('click', function () {
        let size = parseFloat(wrapper2.offsetWidth)
        if (page2 === 1) {
            for (let i = 0; i < cards2.length; i++) {
                cards2[i].style.transform = 'translateX(0px)'
                page2 = 0
            }
        } else {
            for (let i = 0; i < cards2.length; i++) {
                cards2[i].style.transform = `translateX(-${size}px)`
                page2 = 1
            }
        }
    })
}

const cards3 = document.querySelectorAll('.card3')
const wrapper3 = document.getElementById('wrapper3')
const arrows3 = document.querySelectorAll('.arrow3')
let page3 = 0

for (let g = 0; g < arrows3.length; g++) {
    arrows3[g].addEventListener('click', function () {
        let size = parseFloat(wrapper3.offsetWidth)
        if (page3 === 1) {
            for (let i = 0; i < cards3.length; i++) {
                cards3[i].style.transform = 'translateX(0px)'
                page3 = 0
            }
        } else {
            for (let i = 0; i < cards3.length; i++) {
                cards3[i].style.transform = `translateX(-${size}px)`
                page3 = 1
            }
        }
    })
}