function newItem () {

//Adding a new item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
      alert("Please input item.");
    } else {
      $('#list').append(li);
    }

//Crossing out an item
  function crossOut () {
    li.toggleClass("strike");
  };

  li.on("dblclick", function crossOut() {
    li.toggleClass("Strike");
  });

//delete button
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("x"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.addClass("delete");
    }
//Reordering items:
    $('#list').sortable();
}
