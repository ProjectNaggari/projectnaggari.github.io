

const element = document.querySelectorAll("[xml:lang=ar-Latn-x-lc]");
element.addEventListener("click", myFunction);



function myFunction() {
  
  document.querySelectorAll("[xml:lang=ar-Latn-x-lc]").click();

  console.log(div.outerHTML);

  div.classList.toggle("visible");

}







//Basically to make something work like that, you want to add a click event to the element in question that removes or adds a class for which you have a rule in the CSS that sets the visibility (like display: none / display: block). https://developer.mozilla.org/en-US/docs/Web/API/Element/classList has a toggle method that enables this—adding or removing a class. //

//

const div = document.createElement('div');
div.className = 'foo';

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
//