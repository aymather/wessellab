'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiClient = function () {
    function ApiClient() {
        _classCallCheck(this, ApiClient);
    }

    _createClass(ApiClient, [{
        key: 'logWorld',
        value: function logWorld() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(function (data) {
                console.log(data);
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    return ApiClient;
}();