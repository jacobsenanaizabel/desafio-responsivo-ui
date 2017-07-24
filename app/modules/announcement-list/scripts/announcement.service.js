app.service('AnnouncementService', function($http,$q, $log) {

    var self = this;
    var defer = $q.defer();
    var APP = 'scripts/mock';

    var endpoints = {
        categories: APP + "/categorias.json"
    };

    self.getCategories = function(){
        return $http
            .get(endpoints.categories)
            .then(function(response) {
                return response.data;
            });

        return defer.promise;
    }

});