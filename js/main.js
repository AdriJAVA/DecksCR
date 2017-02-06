$(document).ready(function(){
        $.getJSON("http://www.clashapi.xyz/api/cards",function(result){
            for(let i = 0; i < result.length; i++){
                var btn = document.createElement('input');
                btn.type = "image";
                btn.src = `http://www.clashapi.xyz/images/cards/${result[i].idName}.png`;
                btn.classList = 'card';
                document.getElementById('board').appendChild(btn);
                btn.onclick = move;
            }
         })
});

function move(e){
    document.getElementById('cell1').appendChild(this);

}

