

var btn = window.document.getElementById('btn')
btn.addEventListener("click", ChangeColor)


function ColorGenerator(){

    const digits = '0123456789ABCDEF'
    var color = '#'


    for ( let i = 0; i < 6; i++){
        color += digits[Math.floor(Math.random() * 16)]
    }

    return color;
}

function ChangeColor(){
    var background = document.getElementById('up')
    background.style.backgroundColor = ColorGenerator();
    var text = document.getElementById('hexa')
    text.innerText = ColorGenerator();
    btn.innerText = "CHANGE"
}

