// Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// let i = 0,выполниться 1 раз,перед входом в цикл, затем провериться условие 0 < 3, затем выполниться тело цикла, alert выведет number 0!, потом выполниться инкремент


// let i = 0
// for (let i = 0; i < 3; i++) {   
//   alert( `number ${i}!` );
// }



let i = 0;
while (i < 3) {
    alert (`number ${i}!`);
    i++;
}