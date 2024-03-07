
var app = angular.module('myApp', []);
app.controller('boxSearchCtrl', function ($scope) {
    $scope.showSearchBox = false;
});

app.controller('myCtrlMain', function ($scope, $http) {
    $http.get('http://localhost:3000/cart')
        .then(function (response) {
            // Xử lý dữ liệu từ API
            $scope.cart = response.data;
            console.log($scope.cart)
        })
        .catch(function (error) {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi tải dữ liệu(classic):', error);
        });
    $scope.decreaseQuantity = function (cart) {
        if (cart.quantity > 1) {
            cart.quantity--;
        }
    };

    $scope.increaseQuantity = function (cart) {
        cart.quantity++;
    };
    $scope.calculateTotal = function () {
        var total = 0;
        angular.forEach($scope.cart, function (product) {
            total += (product.price - (product.price * product.discount / 100)) * product.quantity;
        });
        return total;


    }; 


    // Function to change the image

    // Function to change the image
   
});
