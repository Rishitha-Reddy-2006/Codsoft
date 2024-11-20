const display = document.getElementById('display');


function appendNumber(number) {
  if (display.value === 'Error') display.value = ''; 
  display.value += number;
}


function appendOperator(operator) {
  if (display.value === 'Error') display.value = ''; 
  const lastChar = display.value.trim().slice(-1);
  if ('+-*/'.includes(lastChar)) return; 
  display.value += ` ${operator} `;
}


function clearDisplay() {
  display.value = '';
}


function calculate() {
  try {
    
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}
