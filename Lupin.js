let name = document.getElementById("name")
let lev1 = document.getElementById('level1')
let lev2 = document.getElementById("level2")
let button = document.getElementById('button')
let para = document.getElementById("para")

button.addEventListener('click', function(){

    lev1.style.display = 'none'
    lev2.style.display = 'flex'
    lev2.style.justifyContent = 'center'
    lev2.style.alignItems = 'center'

    para.innerHTML = `Bonjour ${name.value}`
    
    
})



