function askName() {
    var nameReturn =document.getElementById('ask-name');
    var name = prompt('please enter your name' , 'Here');
    if (name== '' || 'Here'){
        alert('Please try again');
    } else{
        nameReturn.innerHTML = 'Hello' + name + '! Nice to meet you!';
    }
}

function askQuestion(){
    var q = prompt('HOw much would a wood chuck chuck if a wood chuck could chuck wood?');
    if (q !=null) {
        document.getElementById('question').innerHTML = 'Yikes ' + q + ' is a lot of wood!'
    }
}