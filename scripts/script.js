window.onload = () => {
    var calculated = false;
    const buttons = document.getElementsByClassName('button');

    for (let button of buttons) {
        button.addEventListener('click', () => addOp(button.innerHTML));
    }

    const addOp = (op) => {
        const input = document.getElementsByClassName('input-bar')[0];
        if (op != '=') {
            if (calculated) {
                input.innerHTML = '';
                calculated = false;
            }
            input.innerHTML += op;
        }
        else {
            calculated = true;
            input.innerHTML = input.innerHTML.replaceAll('x', '*');
            input.innerHTML = eval(input.innerHTML);
        }
    }
}