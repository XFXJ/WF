var totalQty=document.getElementsByName('totalQty')[0];
// console.log(totalQty);
var increaseJa=document.getElementsByName('increase');

console.log(increaseJa);
for(let i=0;i<increaseJa.length;i++)
{
    increaseJa[i].addEventListener('click',increaseValue);
}
var decreaseDe=document.getElementsByName('decrease');
for(let i=0;i<decreaseDe.length;i++)
{
    decreaseDe[i].addEventListener('click',decreaseValue);
}
var addToCartDr=document.getElementsByName('addToCart');
for(let i=0;i<addToCartDr.length;i++)
{
    addToCartDr[i].addEventListener('click',addToCart);
}

function increaseValue(e){
    var qtyObj=  e.target.nextElementSibling;
    var qty=parseInt(qtyObj.innerText);
    qty++;
    qtyObj.innerText=qty;
    console.log(qty);        
}
function decreaseValue(e){
  var qtyObj=  e.target.previousElementSibling;
  var qty=parseInt(qtyObj.innerText);
 if(qty>1) qty--;
 else qty=0;
  qtyObj.innerText=qty;
  console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}