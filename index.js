const btn =document.querySelector('.btn')
const wish =document.querySelector('.mainContent')
const tips =document.querySelector('.tips')
const audi =document.querySelector('#horror')

btn.addEventListener('click',()=>{
wish.classList.add('active')
btn.style.display ='none'
tips.style.display ='none'
audi.play()
audi.currentTime=0
})
