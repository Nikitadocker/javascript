
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

//  P.S. Код также должен легко модифицироваться для любых других интервалов.



// for (let i = 2; i < 11; i++) { // начало ,условие, шаг

//     if (i % 2 !== 0) continue; // если число делиться на 2 и этот отстаток не равен 0 ,тогда прекращаем выполнения тела цикла, переxодим с помощью сontinue к следующей итерации, таким образоим не выводим нечетные числа

//     alert(i);


// }


// for (let n = 2; n <= 10; i++) {

//     if (n % 1 !== n || n % n !== 1) ;

//     alert (n);

// }


for (let n = 2; n <= 10; i++) {

    if (n % 2 == 0);

    alert(n);

    
}