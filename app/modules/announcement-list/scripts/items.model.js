app.factory('ItemsModel', function(){
    var ItemsModel;
    var self = this;

    ItemsModel = function(_data){
        var data = _data || {};
        this.label = data.label;
        this.url = data.url;
    }

    return ItemsModel;
});