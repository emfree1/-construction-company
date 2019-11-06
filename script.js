let title = document.getElementsByClassName("accordion-title");
let cont = document.getElementsByClassName("accordion-cont");

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function(){
        if(!(this.classList.contains('active'))){
            for (let i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    })
    
    
}