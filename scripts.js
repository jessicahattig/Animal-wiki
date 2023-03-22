window.onload = function() {
  // we get the form element
  const form = document.querySelector("form");
  // we create an event handler for the form's submission
  form.onsubmit = function(event) {
    event.preventDefault();

    
    let lionFacts = document.getElementById("lion");
    lionFacts.setAttribute("class", "hidden");
    let kangarooFacts = document.getElementById("kangaroo");
    kangarooFacts.setAttribute("class", "hidden");
    let notListed = document.getElementById("none");
    notListed.setAttribute("class", "hidden")

    // we gather the age value
    const animal = document.querySelector("input#animal").value;

    // we check if the age is greater than 21.
    if (animal === "lion") {
      lionFacts.removeAttribute("class");
    } else if (animal === "kangaroo") {
      kangarooFacts.removeAttribute("class");
    } else {
      notListed.removeAttribute("class");
    }
  }
};