const target = document.querySelectorAll('[data-anime]')
const animationclass = 'animate'

window.addEventListener('scroll', function(){
    animescroll()
} )
function animescroll(){
    const windowtop = window.pageYOffset + 500
    target.forEach(function(element){
        if((windowtop) > element.offsetTop){
            element.classList.add(animationclass)
        }else{
            element.classList.remove(animationclass)
        }
        console.log(element.offsetTop)
    })
}