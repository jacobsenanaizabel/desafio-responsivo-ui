app.factory('CategoryModel', function(ItemsModel){
    var CategoryModel;
    var self = this;

    CategoryModel = function(_data){
        var data = _data || {};
        this.label = data.label;
        this.url = data.url;
        this.items = data.items ? _.map(data.items, function(item){
          return new ItemsModel(item);
        }) : [];
    }

    return CategoryModel;
});