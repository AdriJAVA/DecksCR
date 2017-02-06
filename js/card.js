class Card{
    constructor(name,elixirCost,src){
        this.name = name;
        this.elixirCost = elixirCost;
        this.src = src;
    }

    getElixirCost(){
        return this.elixirCost;
    }
}