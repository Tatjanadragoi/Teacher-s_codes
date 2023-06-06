const list = document.getElementById('list');
const btn = document.getElementById('btn');
const input = document.getElementById('input');

// 1. create element
// 2. add element into DOM

const onBtnClick = () => {
    
    const elem = document.createElement('li');
    elem.textContent = input.value;

    input.value = '';

    // list.append(elem);
    // list.prepend(elem);

    // const child = document.getElementById('item3');
    // list.insertBefore(elem, list.children[2]);

    // list.insertAdjacentElement('beforeend', elem);
    // list.insertAdjacentHTML('afterbegin', '<div>blabla</div>');
    // list.insertAdjacentText('afterend', '<div>blabla</div>');

    // const child = document.getElementById('item3');
    const listClone = list.cloneNode(true);

    document.body.append(listClone);

    // child.remove();

};

btn.addEventListener('click', onBtnClick);




