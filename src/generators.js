//Generators ele serve para fazer pausas entre as execuções, construção de iteradores

/*
function* hello(){
    console.log("Hello");
    yield 1;
    console.log("From");
    const value = yield 2;
    console.log(value);
    yield 3;
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number;
    }
}

/*
const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/
