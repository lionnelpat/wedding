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
          col.setAttribute('class', "col-sm-3 block");
          
          let top = document.createElement('div');
          top.setAttribute('class', "top");
          let middle = document.createElement('div');
          middle.setAttribute('class', "middle");
          let bottom = document.createElement('div');
          bottom.setAttribute('class', "bottom");
          let ul = document.createElement('ul');
          let first_li = document.createElement('li');
          let second_li = document.createElement('li');
          let span = document.createElement('span');
          span.setAttribute('class',"converse");
          span.innerHTML = gift.get("source");
          second_li.appendChild(span);
          let third_li = document.createElement('li');

          ul.appendChild(first_li);
          ul.appendChild(second_li);
          ul.appendChild(third_li);

          top.appendChild(ul);

          let image = document.createElement('img');
          image.setAttribute('src', `${gift.get('image').url()}`);
          image.setAttribute('alt', `${gift.get('name')}`);

          middle.appendChild(image);

          let title = document.createElement('div','heading');
          title.innerHTML = gift.get('name');
          let detail = document.createElement('div', 'info');
          detail.innerHTML = gift.get('details');
          let status = document.createElement('div', "style");
          if(gift.get('status') == "available"){
            status.innerHTML = "Status : Disponible";
          }else{
            status.innerHTML = "Status : Déjà offert";
          }
          let price = document.createElement('div', "price");
          price.innerHTML = `${ gift.get('price')} FCFA`
          
          bottom.appendChild(title);
          bottom.appendChild(detail);
          bottom.appendChild(status);
          bottom.appendChild(price);

          col.appendChild(top);
          col.appendChild(middle);
          col.appendChild(bottom);

          row.appendChild(col);
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