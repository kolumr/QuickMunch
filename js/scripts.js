
function getData(){
  var total = 0;
  var size =0;
  var crust = 0;
  var topping = 0;
  var radioSize = document.getElementsByName("pizza_size");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      size = parseInt(radioSize[i].value)
      total = total +  size
      alert(total);
    break;
    }
  }
  var radioCrust = document.getElementsByName("crust");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioCrust[i].checked)
    {
      crust = parseInt(radioCrust[i].value)
      total = total + crust;
      alert(total);
    break;
    }
  }
  var radioTopping = document.getElementsByName("topping");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioTopping[i].checked)
    {
      topping = parseInt(radioTopping[i].value)
      total = total +  topping
      alert(total);
    break;
    }
  }
  const pizza1 = new Pizza(size,crust,topping);
  addToCart(); 
  function addToCart(){
    // const parray = JSON.stringify(pizza1);
    alert(pizza1.size1);
    if(pizza1.size1 === 1200){
      var pizza_size = "Large";
      alert(pizza_size);
    }
    else if(pizza1.size1 === 900){
      pizza_size = "Medium";
      alert(pizza_size);
    }
    else{
      pizza_size = "Small";
      alert(pizza_size);
    }
    if(pizza1.crust1 === 1200){
      var pizza_size = "Large";
      alert(pizza_size);
    }
    else if(pizza1.size1 === 900){
      pizza_size = "Medium";
      alert(pizza_size);
    }
    else{
      pizza_size = "Small";
      alert(pizza_size);
    }
  }
};
function Pizza(size,crust,topping){
  this.size1 = size;
  this.crust1 = crust;
  this.topping1 = topping;
  
}


