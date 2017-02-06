var app = (function(){

    var deck = new Deck('myDeck');

    var cards = [];

    var init = (function(){

        $.getJSON("http://www.clashapi.xyz/api/cards",function(result){
            for(let i = 0; i < result.length; i++){
            var aux = new Card(result[i].name,result[i].elixirCost,result[i].idName)
            cards.push(aux);
        }
            
         });
    })();
})();