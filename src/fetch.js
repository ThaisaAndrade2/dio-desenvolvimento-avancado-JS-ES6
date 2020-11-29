//utilizado de fazer request
fetch('https://api.github.com/users/ThaisaAndrade2', {method: 'get'})
    .then(responseStream => {
        console.log(responseStream)
        if(responseStream.status ===200){
            return responseStream.json()
        } else {
            throw new Error('Request error')
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log('Erro', err));
