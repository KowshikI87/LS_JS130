//did it orally and copied from LS solution

function makeList() {
  return {
    items: [],

    add: function (item) {
      let index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(item + " added!");
      }
    },

    list: function () {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function (item) {
      let index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}