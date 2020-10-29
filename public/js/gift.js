Parse.initialize("2gMBwbrPBDyT1Y7ssvEkqhphBPjhmVRaEjycLQgp","7667jFlYBO2za0eoWE9GMuym6uu1uay03CRN2bau"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

// console.log("resr");

const fetchGift = async () => {

  const Gifts = Parse.Object.extend("Gift");
  const query = new Parse.Query(Gifts);

  query.find().then(function(gifts){
      if(gifts){
        var div = document.querySelector('.gifts');
        div.setAttribute('class', 'container-fluid retailer-list');
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        gifts.forEach(gift => {
          //je log les objects. 
          // pour recuperer un atribut, tu fait gift.get("nom_attribut")
          // 
          var col = document.createElement('div');
          col.setAttribute('class', 'col-sm-6');
          var content = document.createElement('div');
          content.setAttribute('class', 'retailer-thumbnail d-flex align-items-content justify-content-center');
          var img = document.createElement('img');
          img.setAttribute('src', 'img/placeholders/360x120.png');
          var title =  document.createElement('h4');
          title.setAttribute('class', 'text-center');
          title.innerHTML = gift.get("name");
          content.appendChild(img);
          col.appendChild(content);
          col.appendChild(title);

          row.appendChild(col);

          console.log(gift.get("name"));
        });
        div.appendChild(row);
      } else {
          console.log("Nothing found, please try again");
      }
  }).catch(function(error){
      console.log("Error: " + error.code + " " + error.message);       
  });
}

fetchGift();