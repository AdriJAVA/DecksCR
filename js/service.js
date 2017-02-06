var mainService = (function(){
    
    var getJSON = function(){
               return $.getJSON("http://www.clashapi.xyz/api/cards");
    }

    return{
        getJSON: getJSON
    }
})();