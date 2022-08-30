let display = document.querySelector('#display')
let buttons = Array.from(document.querySelectorAll('button'))

buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        if(e.target.innerText === 'C'){
            display.innerText = '';
        }else if(e.target.innerText === 'DEL'){
            display.innerText = display.innerText.slice(0, -1)
        } else if(e.target.innerText === '=') {
            try {
                display.innerHTML = eval(display.innerText)
            } catch {
                display.innerText = "ERROR";
            }
        } else{
            display.innerText += e.target.innerText;
        }
    })
})