//copied as was to easy
//USE PEDAC!

function makeList() {
  let items = [];

  return function(newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + " added!");
      } else {
        items.splice(index, 1);
        console.log(newItem + " removed!");
      }
    } else if (items.length === 0) {
      console.log("The list is empty.");
    } else {
      items.forEach(item => console.log(item));
    }
  };
}