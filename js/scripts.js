numbers = [];
function getData(){
  var total = 0;
  var size =0;
  var crust = 0;
  var topping = 0;
  orderNo = 1;
  grandTotal = 0;
  var radioSize = document.getElementsByName("pizza_size");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      size = radioSize[i].value
    break;
    }
  }
  var radioCrust = document.getElementsByName("crust");
  for (var i = 0, length = radioCrust.length; i < length; i++)
  {
    if (radioCrust[i].checked)
    {
      crust = radioCrust[i].value
     
    break;
    }
  }
  var radioTopping = document.getElementsByName("topping");
  for (var i = 0, length = radioTopping.length; i < length; i++)
  {
    if (radioTopping[i].checked)
    {
      topping = radioTopping[i].value
      // alert(topping)
    break;
    }
  }
  
  const pizza1 = new Pizza(size,crust,topping,orderNo,total);
  addToCart(); 
  function addToCart(){
    // const parray = JSON.stringify(pizza1);
    if(pizza1.size1 === "Large"){
      pizza_size = 1200;
      total =total + pizza_size;
      
    }
    else if(pizza1.size1 === "Medium"){
      pizza_size = 900;
      total += pizza_size;
    }
    else if(pizza1.size1 === "Small"){
      pizza_size = 700;
      total += pizza_size;
    }
    else{
      alert("select size");
    }
    if(pizza1.crust1 === "Thin crust"){
      pizza_crust = 150;
      total += pizza_crust;
      
    }
    else if(pizza1.crust1 === "Thick crust"){
      pizza_crust = 250;
      total += pizza_crust;
    }
    else if(pizza1.crust1 === "Deep crust"){
      pizza_crust = 300;
      total += pizza_crust;
    }
    else if(pizza1.crust1 === "Cheese filled crust"){
      pizza_crust = 250;
      total += pizza_crust;
      
    }
    else{
      pizza_crust = 250;
      total += pizza_crust;
    }
    if(pizza1.topping1 === "Onions"){
      pizza_topping = 150;
      total += pizza_topping;
      
      
    }
    else if(pizza1.topping1 === "Sausage"){
      pizza_topping = 200;
      total += pizza_topping;
    }
    else if(pizza1.topping1 === "Bacon"){
      pizza_topping = 250;
      total += pizza_topping;
    }
    else{
      // alert("choose topping ")
    }
    orderNo =orderNo + 1 ;
      $("#pizza").append('<tr><th scope="row">'  + pizza1.size1 + '</th><td id="crust">'   + pizza1.crust1 +'</th><td id="topping">'+ pizza1.topping1 + '</th><td id="total">' + total + `</th>`); 
    
    numbers.push(total);
  }
  numbers.forEach(number => {
    grandTotal = number +grandTotal;
  
  });
  
};
function Pizza(size,crust,topping,orderNo,total){
  this.size1 = size;
  this.crust1 = crust;
  this.topping1 = topping;
  this.orderNo1 = orderNo;
  this.total1 = total;
  
};
clicks = 0;

  

  $("#porder").click(function () {
    var message = confirm("Would you like it to be delivered at an extra cost of 200?")
    if (message == true){
      newTotal = grandTotal +200;
      var location = prompt("Enter your location")
      alert("Your food will be delivered to " + location +". Total cost is" + newTotal)
    }
    else{
      alert("Your food will cost you " + grandTotal)
    }
  });
