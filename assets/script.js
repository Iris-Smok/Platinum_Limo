function reveal(){
    let reveals = document.querySelectorAll('section')

    for (let i = 0; i < reveals.length; i++){
        let windowHeHeight = window.innerHeight;
        let elementTope = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTope < windowHeHeight - elementVisible){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active')
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on the page load
reveal();