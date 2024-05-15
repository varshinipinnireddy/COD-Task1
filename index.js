let button = document.querySelector('button');
let maincontainer=document.querySelector('listcontainer');
let input = document.querySelector('input');
let listcontainer= document.querySelector('#list-container');

button.addEventListener('click', enterFunction);

function enterFunction() {
    let text = input.value;
    input.value = '';
    if (text === '') {
        alert("Please enter the task");
    } else {
        let outerli = document.createElement('li');
        let innerLi= document.createElement("li");
        innerLi.classList.add("liStyle");
        innerLi.innerText = text;

        let removebtn = document.createElement("span");
        removebtn.innerHTML = '&times;';

        let tick = document.createElement('span');
        tick.innerHTML = '&#x2713;';

        tick.classList.add('tickbefore');
        removebtn.classList.add('tickbefore');

        outerli.appendChild(tick);
        outerli.appendChild(innerLi);
        outerli.appendChild(removebtn);
        listcontainer.classList.add("ulcontainer");
        innerLi.classList.add("tasks");
        outerli.classList.add("taskcontainer");
        listcontainer.append(outerli);
        tick.addEventListener('click', function() {
            this.classList.remove('completed');
            let parent = this.parentElement;
            let children = parent.childNodes;
            children[0].classList.toggle('taskCompleted');
            children[2].classList.toggle('taskCompleted');
            children[1].classList.toggle('completed');
            removebtn.addEventListener('click', function() {
                let parent = this.parentElement;
                parent.remove();
            });
            
        });
        
        
        innerLi.addEventListener('click', clicking);
    }
}

function clicking() {
    let parent = this.parentElement;
    let children = parent.childNodes;
    children[0].classList.toggle('taskCompleted');
    children[2].classList.toggle('taskCompleted');
    this.classList.toggle('completed');
    
    children[2].addEventListener('click', function() {
        let parent = this.parentElement;
        parent.remove();
    });
}