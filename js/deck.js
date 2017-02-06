class Deck{
    constructor(name){
        this.name = name;
        this.cards = []
    }

    add(card){
        this.cards.push(card);
    }

    delete(i){
        this.cards.splice(i,1);
    }
}