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
});