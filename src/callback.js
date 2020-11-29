//função que é passada como parâmetro para ser chamada quando um dado assíncrono estiver pronto
function doSomething(callback){
    setTimeout(function(){
        callback('Frist data');
    },1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    },1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            
            doOtherThing(function(data2){
                var processedData2 = data2.split('');
            
                setTimeout(function(){
                    console.log(processedData, processedData2);
                }, 1000);
            });
        });
    } catch(err){
        
    }
}

doAll();