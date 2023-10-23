$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {
        console.log("Fetched data:", data);

        data.forEach(function(drink) {

            var drinkcard = `
            <div class="card" style="width:18rem;">
                <img src="${drink.image}" class="card-img-top">
                <div class="card-body mb-3">
                    <h3 class="card-title mb-3">${drink.name}</h3>
                    <a href="#" class="btn btn-primary mb-3">${drink.type}</a>
                    <p class="card-text mb-3 fw-bold">${drink.price}</p>
                </div>
            </div>
            `
            $("#drink-menu").append(drinkcard);
        });
    }).fail(function(error) {
            console.error("Error fetching data:", error);
            $("#drink-menu").text("Failed to fetch drink menu. Please try again later.");
    })
})
   