let title = document.getElementsByName("accordion-title");
let cont = document.getElementsByName("accordion-cont");

for (let i = 0; i < title.length; i++) {
    let curTitle = title[i];
    title[i].addEventListener('click', function () {
        let classes = this.getAttribute('class');
        let newClasses = '';
        let classesArr = classes.split(' ');
        let newClassesArr = classes.split(' ');
        for (let j = 0; j < classes.length; j++) {
            
            if(classesArr[j] == 'active'){
                classesArr.splice([j], 1);
            }
            
        }
        if (classesArr.length === newClassesArr.length) {
            classesArr.push('active');
            newClasses = classesArr.join('');
            
        }else{
            newClasses = classesArr.join('');
        }
        this.setAttribute('class', newClasses);
    })
    
    
}