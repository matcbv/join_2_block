const textarea = document.querySelector('textarea');
const btnAction = document.querySelector('.btn-action');
const splitted = document.querySelector('.splitted')

btnAction.addEventListener('click', () => {
    const text = textarea.value.replaceAll('\n', ' ');
    const textList = text.split(' ')
    const divList = splitted.querySelectorAll('div');
    for (str of textList){
        textList.indexOf(str) % 2 === 0 ? divList[0].innerHTML += str + '<br>':
        divList[1].innerHTML += str + '<br>';
    }
})

