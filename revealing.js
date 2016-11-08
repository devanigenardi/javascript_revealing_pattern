var module = (function() {

    var private = function() {
       var a = Math.floor((Math.random()* 1000) + 1);
        console.log(a);
    };

    var public = function() {
        private();
    };
    
    return {
        public: public 
    };

})();

module.public();