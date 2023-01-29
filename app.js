let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;
val = list.childNodes;

// val= list.childNodes[1].nodeType;
// Get children element nodes

// val = list.children[3].children[0].id = "text-link";

val = listItem.parentElement.parentElement; 



console.log(val);