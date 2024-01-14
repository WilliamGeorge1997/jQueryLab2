$(function () {
  $.ajax({
    url: "https://dummyjson.com/products",
    success: function (res) {
      $(res.products).each(function (i, elem) {
        $(".row").append(`<div class="col-md-4 text-center">
            <div class="content">
                <img class="w-100" src=${res.products[i].thumbnail} alt="${res.products[i].brand}">
                <h2>${res.products[i].title}</h2>
                <p>${res.products[i].description}</p>
            </div>
        </div>`);
      });
    },
    error: function (err) {
        alert("Error, fetching data.")
    },
    data: {},
    type: "GET",
  });
});
