$("#getDataBtn").on("click", function () {
  let idInput = $("#id-input").val()
 
  if (idInput.trim() !== "" ) {
    hideErrorMessage();
    showProduct();
    idInput.val("");
  } else {
    showErrorMessage("Please, enter product ID.");
  }
});

/* ------------------------------ Show product ------------------------------ */
function showProduct() {
  let id = $("#id-input").val();
  console.log(id);
  $.ajax({
    url: `https://dummyjson.com/products/${id}`,
    success(res) {
      console.log(res.thumbnail);
      $("#img").html(`<img
      class="w-100 border"
      src="${res.thumbnail}"
      alt="${res.title}"
    />`);
      $("#tBody").html(`
      <tr>
                  <td class="fs-5 border-end fw-bold">ID:</td>
                  <td>${res.id}</td>
                </tr>
        <tr>
                  <td class="fs-5 border-end fw-bold">Title:</td>
                  <td>${res.title}</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Brand:</td>
                  <td>${res.brand}</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Category:</td>
                  <td>${res.category}</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Description:</td>
                  <td>${res.description}</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Rating:</td>
                  <td>${res.rating} Star</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Stock:</td>
                  <td>${res.stock} Unit</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Discount Percentage:</td>
                  <td>${res.discountPercentage}%</td>
                </tr>
                <tr>
                  <td class="fs-5 border-end fw-bold">Price:</td>
                  <td>$${res.price}</td>
                </tr>
                `);
    },
    error: function (err) {
      showErrorMessage("Looks there are problem fetching data, or entered wrong ID.");
    },
    data: {},
    type: "GET",
  });
}

/* --------------------------- Show error message --------------------------- */
function showErrorMessage(message) {
  $("#errorMessage").text(message).show();
}
/* --------------------------- Hide error message --------------------------- */
function hideErrorMessage() {
  $("#errorMessage").hide();
}
