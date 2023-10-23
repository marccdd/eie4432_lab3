$(document).ready(function(){
    var bookingInfo = JSON.parse(localStorage.getItem("bookedTable")) || [];

    var selectedTable = null;

    $(".table").each(function() {
        var tableId = $(this).attr("id");
        if (bookingInfo.includes(tableId)) {
        $(this).addClass("booked");
        }
    });

    $(".table").click(function() {
        var tableId = $(this).attr("id");
        if (bookingInfo.includes(tableId)) {
        alert("This table is already booked.");
        } else {
        selectedTable = tableId;
        $("#selected-table").text("Do you want to book Table " + selectedTable + "?");
        $(".booking-buttons").show();
        }
    });

    $("#confirm-button").click(function() {
        bookingInfo.push(selectedTable);
        localStorage.setItem("bookedTable", JSON.stringify(bookingInfo));
        $("#" + selectedTable).addClass("booked");
        updateTableStatus();
        $(".booking-buttons").hide();
    });

    $("#dismiss-button").click(function() {
        selectedTable = null;
        $("#selected-table").text("");
        $(".booking-buttons").hide();
    });

    function updateTableStatus() {
        $(".table").each(function() {
        var tableId = $(this).attr("id");
        if (bookingInfo.includes(tableId)) {
            $(this).addClass("booked");
        } else {
            $(this).removeClass("booked");
        }
    });
    }
})
