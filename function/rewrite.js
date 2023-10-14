// Перепишите функцию, используя оператор '?' или '||'

// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?

let age = prompt ('Введите ваш age');



function checkAge(age) {
  (age > 18) ? true :
  //  console.log (confirm ('Родители разрешили,?'));
    confirm('Родители разрешили?');
}

// checkAge(age);


// Используя оператор ||

// function checkAge(age) {
//   // console.log ((age > 18) == true );
//   (age > 18) == true  || confirm('Родители разрешили ?');
// }
// checkAge(20);