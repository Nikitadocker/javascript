// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1



// let a = prompt ('Введите число  a');

// let b = prompt ('Введите число  b');


// function min(a, b) {
//     if (a > b) {
//         return  alert ( `Число ${b} меньшее`);
//     }

//     else {
//         return  alert ( `Число ${a} меньшее`);
//     }

// }

// min (a, b);




let a = prompt('Введите число  a');

let b = prompt('Введите число  b');


function min(a, b) {
    if (a > b) {
        return alert(`Число ${b} меньшее`);
    }

    else if (b > a) {
        return alert(`Число ${a} меньшее`);
    }

    else {
        return alert(`Числа равны. Выводим ${a}`);
    }
}

min(a, b);