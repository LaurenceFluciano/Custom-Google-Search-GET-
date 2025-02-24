const $searchInput = document.getElementById("search")

$searchInput.oninvalid = function(event) {
    event.target.setCustomValidity("Search something first.")
}


$searchInput.oninput = function () {
    this.setCustomValidity("");
  };