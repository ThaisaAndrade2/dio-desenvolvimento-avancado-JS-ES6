const assert = require('assert');
const Math = require('.././../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function (){
        value = 0;
    });

    it('Sum two numbers', function(done){
        const math = new Math(); //Instanciando 
        this.timeout(3000);

        value = 5;

    //throw new Error('Oh No!'); -  Simulando erro 
        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it('Multply two numbers', function(){
        const math = new Math();
        const obj = {
           name: 'Thaisa Andrade' 
        };

        const obj2 = {
            name: 'Thaisa Andrade' 
         };

         expect(obj).to.deep.equal(obj2); //comparação de valores

        //const obj2 = obj;
        //expect(obj).to.equal(obj2);

        //expect(obj).to.have.property('name').equal('Thaisa Andrade');
        expect(math.multiply(value, 5)).to.equal(0);
    });

    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: function load(){
                console.log('Called!!')
            }
        };

        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('Called here'); //substituindo métodos

        const math = new Math();

        math.printSum(req, res, 5, 5);

        res.restore();

        expect(res.load.args[0][1]).to.equal(10);
        //expect(res.load.args[0][0]).to.equal('index'); 
        //expect(res.load.calledOnce).to.be.true; //função espiã que valida se a função foi chamada
    });
});