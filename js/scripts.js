
  function getData(){
    var radioSize = document.getElementById("Radio1");
    alert(radioSize);
    var present = 1;
  for (var i = 0, length = radioSize.length; i < length; i++)
  {
    if (radioSize[i].checked)
    {
      alert(radioSize[i].value);
    present = 0;
    
    break;
    }
  }
  if (present == 1 )
  {
    alert("Please select Size")
  }
  };
