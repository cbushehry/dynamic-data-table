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

        for (var i = 0; i < cards.length; i++){
            cardTable.innerHTML += "<tr><td>" + cards[i].id + "</td><td>" + cards[i].name + "</td><td>" + cards[i].price + "</td><td>" + cards[i].isRare + "</td></tr>";
        }
    }
    catch(err){
        alert(err);
    }

}
