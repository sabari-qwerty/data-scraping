// scraping childe to parent

var xpath = "//div[text()='Related']";
var a = [];
var matchingElementSet = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_ITERATOR_TYPE,
  null
);
while ((element = matchingElementSet.iterateNext())) {
  a.push(element.closest(".q-box.qu-hover--bg--darken"));
}
// a.map(item => console.log(item) )
var url = [];
for (i of a) {
  url.push(i.querySelector("a").href);
}
copy(url.join("\n"));
