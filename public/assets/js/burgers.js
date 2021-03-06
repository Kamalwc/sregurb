
$.ajax("/api/freshburgers", { type: "get" }).then(
    function (data) {
        data.burgers.forEach(i => {
            $('#not_eaten').append(
                `<li>
                <div class="butext">
                     <p class='bu'>${i.burger_name}</p>
                     <button class='eat bu' data-id=${i.id}>Eat me</button>
                </div>
                </li>`
            )
        })
    }
);

$.ajax("/api/eatenburgers", { type: "get" }).then(
    function (data) {
        data.burgers.forEach(i => {
            $('#eaten').append(
                `<li>
                <div class="butext">
                    <p class='bu'>${i.burger_name}</p>
                    <button class='digest bu' data-id=${i.id}>Digest</button>
                </div>
            </li>`
            )
        })
    }
);

//for some reason the id number keeps returning undefined 
$(document).on('click', '.digest', function (event) {

    let id = $(this).data("id");
    console.log('The id is this : ' + id);


    $.ajax('/api/burgers/' + id, { type: 'DELETE' }).then(
        function () {
            location.reload();
            console.log("Deleted burger: " + data);
        }
    )
})

$(document).on('click', '.eat', function (event) {

    let id = $(this).data("id");
    console.log('The id is this : ' + id);


    $.ajax('/api/burgers/' + id, { type: 'PUT' }).then(
        function () {
            location.reload();
            console.log("Updated burger with id: " + data);
        }
    )

})


//post 
$('#addBurger').on('submit', (event) => {
    event.preventDefault();

    var newburger = {
        burger_name: $("#addBurger [name=burger]").val().trim()
    };
    console.log(newburger);

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: JSON.stringify(newburger),
        dataType: "json",
        contentType: "application/json"
    }).then(function () {
        console.log("added a new burger!");
        // Reload the page to get the updated list
        location.reload();
    });
    console.log(newburger + 'added succesfully');

});
