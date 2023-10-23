function calculatePrice(){
    var small = $('#small')[0];
    var medium = $('#medium')[0];
    var large = $('#large')[0];
    var drink = $('#drink')[0];
    var price = 0;
    if (drink.value == "bubble-milktea"){
        price = 18;
        $('#image').attr('src', "assets/bubble-milktea.png");
        $('#image').attr('alt', "Bubble Milktea");
        $('#imgdiv').removeClass('d-none');
        if (small.checked){
            price = 18;
        } else if(medium.checked){
            price = 24;
        } else if (large.checked){
            price =  28;
        }
    } else if (drink.value == "iced-latte"){
        price = 13;
        $('#image').attr('src', "assets/iced-latte.jpg");
        $('#image').attr('alt', "Iced Latte");
        $('#imgdiv').removeClass('d-none');
        if (small.checked){
            price = 13;
        } else if(medium.checked){
            price = 18;
        } else if (large.checked){
            price =  22;
        }
    } else if (drink.value == "caramel-macchiato"){
        price = 20;
        $('#image').attr('src', "assets/caramel-macchiato.jpg");
        $('#image').attr('alt', "Caramel Macchiato");
        $('#imgdiv').removeClass('d-none');
        if (small.checked){
            price = 20;
        } else if(medium.checked){
            price = 25;
        } else if (large.checked){
            price =  30;
        }
    } else if (drink.value == "pineapple-juice"){
        price = 20;
        $('#image').attr('src', "assets/pineapple-juice.webp");
        $('#image').attr('alt', "Pineapple Juice");
        $('#imgdiv').removeClass('d-none');
        if (small.checked){
            price = 13;
        } else if(medium.checked){
            price = 18;
        } else if (large.checked){
            price =  22;
        }
    } else if (drink.value == "default"){
        price = 0;
        $('#image').attr('src', '');
        $('#image').attr('alt', '');
        $('#imgdiv').addClass('d-none');
        small.checked = false;
        medium.checked = false;
        large.checked = false;
    }
    $('#price').text(price);
}
function validateForm(){
    let name = document.getElementById('name').value;
    let drink = document.getElementById('drink').value;
    let small = document.getElementById('small');
    let medium = document.getElementById('medium');
    let large = document.getElementById('large');
    let normal = document.getElementById('normal');
    let less = document.getElementById('less');
    let noice = document.getElementById('noice');
    let hundred = document.getElementById('100%');
    let fifty = document.getElementById('50%');
    let zero = document.getElementById('0%');
    if (name.trim().length == 0){
        alert("Please enter your name.");
        return false;
    } else if (drink == "default"){
        alert("Please select a drink first.");
        return false;
    } else if (small.checked == false && medium.checked == false && large.checked == false){
        alert("Please select a size.");
        return false;
    } else if (normal.checked == false && less.checked == false && noice.checked == false){
        alert("Please select an ice preference.");
        return false;
    } else if (hundred.checked == false && fifty.checked == false && zero.checked == false){
        alert("Please select a sweetness level.");
        return false;
    } else {
        return true;
    }
}
function placeOrder(event) {
    validateForm();
    if (validateForm() == true) {
        let name = $('#name').val();
        let drink = $('#drink').val();
        let size = $('input[name="size"]:checked').val();
        let ice = $('input[name="ice"]:checked').val();
        let sweetness = $('input[name="sweetness"]:checked').val();
        let orderData = [name, drink, size, ice, sweetness];
        localStorage.setItem("orders", orderData);

        
        $(".message").html("<div class='alert alert-success'>Order placed successfully! Thank you for your order.</div>")
        .fadeIn(500).delay(3000).fadeOut(500, function () {
            $(this).remove();
            $("#order-form")[0].reset();
            $("#price").text("0");
        });
        
    }
}