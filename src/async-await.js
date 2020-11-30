//É uma forma de criar promise de forma mais simples
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(12345)
    },1000)
});

const simpleFunc = async () =>{
    const data = await Promise.all([asyncTimer(), fetch('https://api.github.com/users/ThaisaAndrade2').then(resStream => 
    resStream.json() )]) //espera e faz request ao mesmo tempo
    //const data = await asyncTimer; //aguardando
    //console.log(data);
    return data;
};

simpleFunc()
    .then(data =>{
    console.log(data)
    })
    .catch(err => console.log(err)
    )