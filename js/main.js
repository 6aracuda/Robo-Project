const parent = document.querySelector('.icon__i')

function show(){
    document.querySelector('.hint').classList.add('show')
}
function hidden(){
    document.querySelector('.hint').classList.remove('show')
}
parent.addEventListener('mouseover', show)
parent.addEventListener('mouseout', hidden)