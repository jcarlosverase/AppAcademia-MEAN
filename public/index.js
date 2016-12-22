(function(){
    "use strict";

    angular.module('alumnos', [])
        .controller('alumnosCtr', alumnosLista);

    alumnosLista.$inject = ['$http'];
    
    function alumnosLista($http)
    {
        var vm = this;
        vm.Titulo = "Listado de Alumnos";
        vm.ListaAlumnosInfo = [];
        vm.GetAlumnos = getAlumnos;

        getAlumnos();

        function getAlumnos()
        {
            $http.get('/getAlumnos').then(

                function (res){

                    vm.ListaAlumnosInfo = res.data;
                },
                function (err){
                    console.log(err);
                }
            )
        }     

    }

})();