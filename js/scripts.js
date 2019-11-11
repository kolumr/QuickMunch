
function getData(){
  var total = 0;
  var radioSize = document.getElementsByName("pizza_size");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      // alert(radioSize[i].value);
    break;
    }
  }
  var radioCrust = document.getElementsByName("crust");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioCrus[i].checked)
    {
      alert(radioCrust[i].value);
    break;
    }
  }
  var radioTopping = document.getElementsByName("topping");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioTopping[i].checked)
    {
      alert(radioTopping[i].value);
    break;
    }
  }
  total = radioSize[i].checked.value + radioCrust[i].checked.value + radioTopping.checked.value
  alert(total);
};
