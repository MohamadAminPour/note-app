let inputElem = document.querySelector('input')
let container_palet = document.querySelectorAll('.container_palet')
let container_random_color = document.querySelector('#container_random_color')
let add = document.querySelector('.add')
let clearInput = document.querySelector('.clearInput')
let noteList = document.querySelector('.noteList')

///////////////////////////////////////

inputElem.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addNote()
        inputElem.value = ''
    }
})

//////////////////////////////////////


container_palet.forEach((palet) => {
    palet.addEventListener('click', () => {
        inputElem.style.backgroundColor = palet.style.backgroundColor
    })
})


////////////////////////////////////////

function addNote() {
    if (inputElem.value != '') {
        noteList.insertAdjacentHTML('beforeend',
            ` <div class="note" style="background-color:${inputElem.style.backgroundColor.trim()};>
         <p" class="note_txt">${inputElem.value}</p>
      </div>`
        )

   



        inputElem.style.backgroundColor = 'rgba(0, 0, 0, .2)'
        container_random_color.style.backgroundColor = 'white'
    }
    else {
        alert('متنی برای اضافه شدن وجود ندارد')
    }
}


/////////////////////////////////////////


clearInput.addEventListener('click', () => {
    inputElem.value = ''
})


//////////////////////////////////////////


add.addEventListener('click', () => {
    addNote()
    inputElem.value = ''
})


//////////////////////////////////////////
let red, green, blue

container_random_color.addEventListener('click', () => {
    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)

    inputElem.style.backgroundColor = container_random_color.style.backgroundColor = ((' rgb(' + red + ' , ' + green + ' , ' + blue + ')  '));
})