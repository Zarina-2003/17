let modal_bg = document.querySelector('.modal-bg')
let window_1 = document.querySelector('.modal-1')
let close_1 = document.querySelector('.close-btn-1')
let open_1 = document.querySelector('#modal-1')


let window_2 = document.querySelector('.modal-2')
let close_2 = document.querySelector('.close-btn-2')
let open_2 = document.querySelector('#modal-2')


open_1.onclick = () => {
    modal_bg.style.display = 'block'
    window_1.style.display = 'block'
    setTimeout(() => {
        modal_bg.style.opacity = '1'
        window_1.style.opacity = '1'

    }, 300);

}
close_1.onclick = () => {
    window_1.style.opacity = '0'
    modal_bg.style.opacity = '0'
    setTimeout(() => {
        window_1.style.display = 'none'
        modal_bg.style.display = 'none'
    }, 300);

}



open_2.onclick = () => {

    window_2.style.display = 'block'


    setTimeout(() => {
        window_2.style.opacity = '1'
    }, 300);

}
close_2.onclick = () => {

    window_2.style.opacity = '0'

    setTimeout(() => {
        window_2.style.display = 'none'
    }, 300);

}
let pattern = {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[A-Za-z]\w{7,14}$/,
}

let inp = document.querySelectorAll('.inp')

function valuedate(fild, regex) {
    if (regex.test(fild.value)) {
        fild.style.border = '2px solid transparent'
    } else {
        fild.style.border = '2px solid red'
    }
}


inp.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.getAttribute('name')
        valuedate(inp, pattern[key])
    }
})
