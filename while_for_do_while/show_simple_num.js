// Math.sqrt();
// console.log('check');

let start_number = 200;
let finish_number = 300;

metka:
for (current_number = start_number; current_number <= finish_number; current_number++) {

    let start_delitel = 2;
    let finish_delitel = Math.sqrt(current_number);
    // console.log (finish_delitel);
    for (current_delitel = start_delitel; current_delitel <= finish_delitel; current_delitel++) {
        // console.log(current_number % current_delitel);
        if (current_number % current_delitel == 0) continue metka;

        
    }
    alert(current_number);
}