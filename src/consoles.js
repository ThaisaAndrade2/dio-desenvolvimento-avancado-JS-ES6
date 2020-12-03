//Consoles


console.log('Texto Black');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My group');
console.log('Info inside group');
console.log('More info inside group');
console.groupEnd('My group');

console.time('Log Time');
setTimeout(() =>{
    console.timeEnd('log time');
},2000);

console.table(['Thaisa Andrade', 'Digital Innovation One']);
console.assert(1 === 0 , 'Ops') // se a condição for falsa ele apresenta o log;

console.log('%c styled log', 'color: blue; font-size:30px;');