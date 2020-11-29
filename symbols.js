//gerar identificador unico

/*

const uniqueId = Symbol();
console.log(uniqueId);

*/

/*
const uniqueId = Symbol("Hello");
const uniqueId2 = Symbol("Hello");

console.log(uniqueId === uniqueId2);

*/

/*
const uniqueId = Symbol;
const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);*/

const uniqueId = Symbol("Hello");
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const str = 'Digital innovation One';
//const it = arr[Symbol.iterator]();

/* Forma1
console.log(it.next()); //retornando index das iterações
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); //return true informando que finalizou.
*/

/*
while (true){
    
    let {value, done} = it.next();
    
    console.log(value);

    if(done){
        break;
    }
}
*/

/*
for(let value of str){
    console.log(value);
}

const arr2 = [...str]; 
console.log(arr2)
*/

/*
const obj = {
    [Symbol.iterator](){

    }
}*/

//console.log(arr[Symbol.iterator]().next());

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return{
            next: () => {
                i++;
                return{
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]();

for ( let value of obj){
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);