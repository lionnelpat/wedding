Parse.initialize("2gMBwbrPBDyT1Y7ssvEkqhphBPjhmVRaEjycLQgp","7667jFlYBO2za0eoWE9GMuym6uu1uay03CRN2bau"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

// console.log("resr");

const fetchGift = async () => {

  const Gifts = Parse.Object.extend("Gift");
  const query = new Parse.Query(Gifts);

  query.find().then(function(gifts){
      if(gifts){
        var div = document.querySelector('.gifts');
      
        gifts.forEach(gift => {
          //je log les objects. 
          // pour recuperer un atribut, tu fait gift.get("nom_attribut")
          // 
          var col = document.createElement('div');
          col.setAttribute('class', 'col-sm-4');
          var content = document.createElement('div');
          content.setAttribute('class', 'block');
          var top = document.createElement('div');
          top.setAttribute('class', 'top'); 
          var span = document.createElement('span');
          span.setAttribute('class', 'converse');
          span.innerHTML = gift.get("source");
          top.appendChild(span);
          
          var middle = document.createElement('div');
          middle.setAttribute('class', 'middle');

          var img = document.createElement('img');
          img.setAttribute('src',gift.get("image")._url);

          middle.appendChild(img);

          content.appendChild(top);
          content.appendChild(middle);
    
          var bottom = document.createElement('div');
          bottom.setAttribute('class', 'bottom');
          var heading = document.createElement('div');
          heading.setAttribute('class', 'heading');
          heading.innerHTML = gift.get("name");
          var quantity = document.createElement('div');
          quantity.setAttribute('class', 'style');
          quantity.innerHTML = "Quantité: "+gift.get("quantity")+"  Statut: "+gift.get("status");

          var price = document.createElement('div');
          price.setAttribute('class', 'price');
          price.innerHTML = gift.get("price")+" FCFA";

          bottom.appendChild(heading);
          bottom.appendChild(quantity);
          bottom.appendChild(price);

          content.appendChild(bottom);
          col.appendChild(content);
          div.appendChild(col);
          console.log(gift);
        });
       
      } else {
          console.log("Nothing found, please try again");
      }
  }).catch(function(error){
      console.log("Error: " + error.code + " " + error.message);       
  });
}

fetchGift();