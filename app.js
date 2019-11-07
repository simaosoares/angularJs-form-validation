"use strict";

angular.module('app', [])
    .controller('AppController', function () {
        const vm = this;
        vm.message = "";
        vm.submit = submit;

        function submit() {
            if(vm.form.$valid){
                vm.message = "Your form has been submitted :)";
                clearForm();
            }
        }

        function clearForm() {
            vm.email = "";
            vm.password = "";
            vm.form.$setPristine();
        }
    });
