// let parent = document.querySelector('.icon__i')

// function show() {
//    document.querySelector('.hint').classList.add('show')
// }
// function hidden() {
//    document.querySelector('.hint').classList.remove('show')
// }
// parent.addEventListener('mouseover', show)
// parent.addEventListener('mouseout', hidden)

function MouseOver() {
   document.addEventListener('DOMContentLoaded', function () {
      let card = document.querySelector('.icon__i');
      console.log(card);
      card.addEventListener('mouseover', function () {
         let hint = document.querySelector('.hint');
         hint.classList.toggle('show');
      });
   });
}
// function FontColorChanger() {
//    document.getElementById('h1').style.color = '#FFFFFF';
//    document.getElementById('h2').style.color = '#FFFFFF';
//    document.getElementById('h3').style.color = '#FFFFFF';
// }

// function FontColorBack() {
//    document.getElementById('h1').style.color = '#000000';
//    document.getElementById('h2').style.color = '#000000';
//    document.getElementById('h3').style.color = '#000000';
// }
MouseOver();
