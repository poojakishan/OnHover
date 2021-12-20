.textInfo {
  border: solid 1px lightblue;
}

.textInfo:hover {
  background-color: #e8a4c9;
  color: #fff;
}

#pastries:hover + #textInfo .innerText-cupCake {
  display: block;
}

#pastries:hover + #textInfo .innerText-cheeseCake {
  display: block;
}

.innerText-cupCake {
  display: none;
}

.innerText-cheeseCake {
  display: none;
}

.item {
  background-color: lightblue;
  width: 200px;
  padding: 5px;
  text-align: center;
}

.item:hover {
  background-color: #e8a4c9;
}

h2 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  padding: 10px;
}
<div class="wrapper">
   <div class="box pastries" id="pastries">
     <div class="box item cupcake">Cupcake</div>
     <div class="box item cheesecake">Cheesecake</div>
   </div>
   <div class="box textInfo" id="textInfo">
     <h2>Please, select a category first!</h2>
     <div class="innerText-cupCake">
        <p>Ice cream fruitcake cotton candy.</p>
     </div>
     <div class="innerText-cheeseCake">
        <p>Chocolate sweet roll chupa chups bonbon macaroon.</p>
     </div>
   </div>
 </div>
