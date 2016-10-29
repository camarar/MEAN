// public/js/services/ContatoServices.js

angular.module('contatooh').factory('Contato', function($resource) {
    return $resource('/contatos/:id');
});