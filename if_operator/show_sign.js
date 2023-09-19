let number = prompt('Введите ваше число', '');

if (number > 1) {
    alert('1');
}
else if (number < 1) {
    alert('-1');
}
else if (number == 0) {  // почему данное условие выводит -1?
    alert('0');
}