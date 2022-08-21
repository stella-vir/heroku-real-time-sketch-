var todo = ['Please take care of urself.'];
var isShown = false;
var isChecked = [false];

function updatels() {
  var ls = document.getElementById('todo');
  ls.innerHTML = '';
  ls.innerHTML += '<h3>Todo: </h3>';
  ls.innerHTML += '<ul>';

  for (var i=0; i<todo.length; i++)
  {
    ls.innerHTML += '<li>';
    if (isChecked[i])
    {
      ls.innerHTML += '<font color="green">' + todo[i] + '</font>';
    }
    else
    {
      ls.innerHTML += todo[i]
    }

    if (isChecked[i])
    {
      ls.innerHTML += '<button type="button" name="button" onclick=checked('+i+')>UnCheck</button>';

    }
    else
    {
      ls.innerHTML += '<button type="button" name="button" onclick=checked('+i+')>Checked</button>';

    }
    ls.innerHTML += '</li>';
  }
    ls.innerHTML += '</ul><br>';
    ls.innerHTML +=  '<button type="button" name="button"id="showmore" onclick=showmore()>Show More</button><br>';
    ls.innerHTML +=  '<button type="button" name="button"id="add" onclick=add()>Add</button>';

}

function showmore() {
  isShown = true;
  updatels();
}
updatels();

function add() {

}

function checked(i) {
  // change true to false, false to true
  isChecked[i] = !isChecked[i];
  updatels();

}