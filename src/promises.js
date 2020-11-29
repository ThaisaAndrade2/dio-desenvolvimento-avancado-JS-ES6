const doSomeThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Frist data')
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second data')
    }, 1000);
});

Promise.all([doSomeThingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
}) //execução paralela


console.log(doSomeThingPromise); // status de pedding
//doSomeThingPromise.then( data => console.log(data)).catch(error => console.log(error)); //chama somente quando estiver pronta;
doSomeThingPromise().then( data => {
    console.log(data.split(""));
    return doOtherThingPromise();
})
.then(data2 => console.log(data2.split("")))
.catch( error => console.log('Ops', error));

/*estados:
Pending - Executando;
Fulfilled - 
Rejected - 

*/