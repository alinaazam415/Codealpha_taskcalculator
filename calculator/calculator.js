const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let current = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      current = '';
      result.value = '';
    } else if (value === '←') {
      current = current.slice(0, -1);
      result.value = current;
    } else if (value === '=') {
      try {
        let expression = current.replace(/÷/g, '/')
                                .replace(/×/g, '*')
                                .replace(/−/g, '-')
                                .replace(/\+/g, '+');
        result.value = eval(expression);
        current = result.value;
        resetNext = true;
      } catch {
        result.value = 'Error';
        current = '';
      }
    } else if (value === 'x²') {
      current = (parseFloat(result.value) ** 2).toString();
      result.value = current;
    } else if (value === '√') {
      current = (Math.sqrt(parseFloat(result.value))).toString();
      result.value = current;
    } else if (value === '1/x') {
      current = (1 / parseFloat(result.value)).toString();
      result.value = current;
    } else if (value === '+/−') {
      current = (-parseFloat(result.value)).toString();
      result.value = current;
    } else if (value === 'CE') {
      result.value = '';
      current = '';
    } else if (value === '%') {
      current = (parseFloat(result.value) / 100).toString();
      result.value = current;
    } else {
      if (resetNext) {
        current = '';
        resetNext = false;
      }
      current += value;
      result.value = current;
    }
  });
});

