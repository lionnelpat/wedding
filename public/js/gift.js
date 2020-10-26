Parse.initialize("2gMBwbrPBDyT1Y7ssvEkqhphBPjhmVRaEjycLQgp","7667jFlYBO2za0eoWE9GMuym6uu1uay03CRN2bau"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

// console.log("resr");

const fetchGift = async () => {

  const Gifts = Parse.Object.extend("Gift");
  const query = new Parse.Query(Gifts);

  query.find().then(function(gifts){
      if(gifts){
        gifts.forEach(gift => {
          //je log les objects. 
          // pour recuperer un atribut, tu fait gift.get("nom_attribut")
          // 
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