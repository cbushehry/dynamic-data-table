async function loadCards(){
    try{
        const response = await fetch('http://127.0.0.1:5500/CODE/ZENVAprojects/dynamic-data-table/cards.json');     //local path
        let cardsJson = await response.json();
        let cardTable = document.getElementById("myCards");
        let onlyRares = document.getElementById("raresOnly");

        var cards = cardsJson.map(function(card){
            var cardsToShow = {
                "id": card.id,
                "name": card.name,
                "price": card.price,
                "isRare": card.isRare
            }

            return cardsToShow;
        })
        
        cardTable.innerHTML = "<tr><td>ID</td><td>Name</td><td>Price</td><td>Is Rare</td>";
        let rareCards = cards.filter(obj => obj.isRare == true).map(obj => ({"id":obj.id, "name":obj.name, "price":obj.price,"isRare":obj.isRare}));

        if(onlyRares.checked){
            for (var i = 0; i < rareCards.length; i++){
                cardTable.innerHTML += "" + rareCards[i].id + "" + rareCards[i].name + "" + rareCards[i].price + "" + rareCards[i].isRare + "";
            }
        }else{
            for (var i = 0; i < cards.length; i++){
                cardTable.innerHTML += "" + cards[i].id + "" + cards[i].name + "" + cards[i].price + "" + cards[i].isRare + "";
            }
        }
    }
    catch(err){
        alert(err);
    }

}
