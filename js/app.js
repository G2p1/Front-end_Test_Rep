'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('about', 'about.html'),
            new Route('some', 'some.html')
        ]);
    }
    init();
}());
