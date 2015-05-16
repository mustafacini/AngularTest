angular.module("app", [])
    .controller('AppCtrl', appCtrl)
    .directive('mcMyList', myList)
    .directive('mcBackTest',backTest);


function appCtrl($scope) {
    var self = this;
    self.FormName = "AppCtrl";
    self.Data = [{Name:'Test1',Surname:'abc1'},{Name:'Test2',Surname:'abc2'},{Name:'Test3',Surname:'abc3'}];
    self.Save = Save;
    self.Search = { filterQuery: '' };

    return self;

    function Save(item) {
        console.log(item);
        self.Data.push(item);
    };
}

function myList() {
    return {
        restrict: "E",
        scope: {
            data: '=',
            showSearch: '@',
            onSave: '&'
        },
        template: "<input ng-if='showSearch' type='text' ng-model='search.Name'/>" +
                "<ul>" +
                    "<li ng-repeat='item in data | filter:{Name:search.Name}'>" +
                        "<input type='text' ng-model='item.Name'/>" +
                        "<input type='text' ng-model='item.Surname'/>" +
                    "</li>" +
                "</ul>" +
            "<button ng-click='onSave({myParam:person})'>Test</button>",
        link: function(scope, element, attrs) {
            scope.search = {Name:""};
            scope.$watch(function(){
                scope.person = {Name:'Test'+scope.data.length+1,Surname:'Test'+scope.data.length+1};
            })
        }
    }
}

function backTest(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
            element.bind('propertychange keyup change paste', function (blurEvent) {
                 if(element.val() == "11")
                {
                    element.addClass("Test");
                }
                else
                {
                    element.removeClass("Test");
                }

            });
        }
    }
}
