class CustomErrror extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Celso Henrique';
    const myError = new CustomErrror({
        message:'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch(err){

    if (err.data.type === 'Server error'){
       console.log(err);
       console.log(err.data)
    }

} finally{
    console.log('Keep going...');
}