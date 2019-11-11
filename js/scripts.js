
function getData(){
  var radioSize = document.getElementsByName("pizza_size");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      alert(radioSize[i].value);
    break;
    }
  }
  var radioSize = document.getElementsByName("crust");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      alert(radioSize[i].value);
    break;
    }
  }
  var radioSize = document.getElementsByName("topping");
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      alert(radioSize[i].value);
    break;
    }
  }
};
