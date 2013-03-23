 module.exports = function printList(listname, ...items) {
   console.log('list %s has the following items', listname);
   items.forEach(function (item) { console.log(item); });
 };
