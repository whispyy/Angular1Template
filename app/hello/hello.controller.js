(function(){
    'use strict';
    
    angular
    .module('fjs.hello')
    .controller('HelloController', helloController);
    
    helloController.$inject = ['operation'];
    function helloController(operation,$scope) {
        var vm = this;
        
        vm.op1=24;
        vm.op2=12;
        // TODO
       	vm.addi = function(){
       		console.log('click');
       		vm.reponse = operation.add(vm.op1,vm.op2);
       	}
       	
       	vm.reponse = operation.add(vm.op1,vm.op2);
        
    }
    
})();