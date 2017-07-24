app.controller('AnnouncementController', function($scope,AnnouncementService,CategoryModel) {

    var vm = this;
    $scope.categories = [];

    $scope.load = function () {
        AnnouncementService.getCategories().then(function(response) {
            startCategoryEdit(response.items);
        });
    }

    self.startCategoryEdit = function(categoriesResult){
        _.each(categoriesResult, function (category) {
            $scope.categories.push(new CategoryModel(category));
        });
    }

   $scope.states_brasil = [
        "Acre	AC",
        "Alagoas	AL",
        "Amapá	AP",
        "Amazonas AM",
        "Bahia	BA",
        "Ceará	CE",
        "Distrito Federal DF",
        "Espírito Santo ES",
        "Goiás GO",
        "Maranhão MA",
        "Mato Grosso MT",
        "Mato Grosso do Sul MS",
        "Minas Gerais MG",	 
        "Pará PA",	 
        "Paraíba	PB",	 
        "Paraná	PR"
    ];
});