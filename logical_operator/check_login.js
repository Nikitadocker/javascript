// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».






// let login = prompt('Введите ваш логин', '');
// if (login == 'Админ') {
//     prompt('Введите ваш пароль', '');
// } else if (login == '' || null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }
// if (login == 'Я главный') {
//     alert('Здравствуйте!');
// } else if (login == '' || null) {
//     alert('Отменено');
// } else {
//     alert('Неверный пароль');
// }




let login = prompt('Введите ваш логин', '');

if (login == 'Админ') {

    let password = prompt('Введите ваш пароль', '');


    if (password == 'Я главный') {
        alert('Здравствуйте!')
    }
    else if (password == null) {
        alert('Отменено');
    }

    else {
        alert('Неверный пароль');
    }
}

if (login == '' || null) {  // в этом коде есть ошибка что всегда будет выводиться Я вас не знаю , починить можно поменяв if на else if
    alert('Отменено');
}

else {
    alert('Я вас не знаю');
}










