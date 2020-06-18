
$.ajax("/api/freshburgers", { type: "get" }).then(
    function (data) {
        // console.log(data[0].burger_name);
        console.log(data.burgers);
        data.burgers.forEach(i => {
            $('#eaten').append(
                `<li>
                <p>${i.burger_name}</p>
                <button class='eat'>Eat me</button>
            </li>`
            )
        })
    }
);

$.ajax("/api/eatenburgers", { type: "get" }).then(
    function (data) {
        console.log(data.burgers);
        
        // for each record returned create a list element for it
        data.burgers.forEach(i => {
            $('#not_eaten').append(
                `<li>
                <div class='burgerName'>
                    <p>${i.burger_name}</p>
                    <button class='digest'>Digest</button>
                </div>
            </li>`
            )
        })
    }
);

$('.digest').on('click', () => {
    
    alert("clicked");
})


//post 
$('#addBurger').on('submit', (event) => {
    event.preventDefault();


    $.ajax('/api/bugers', { type: 'POST' }).then(
        function (data) {
            console.log(data + " was successfully posted");
        }
    )

    var newburger = {
        burger_name: $("#addBurger [name=burger]").val().trim()
    };

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
});


//put
$('.eat').on('click', () => {
    // $.ajax('/api/bugers', { type: 'PUT' }).then(
    //     function (data) {

    //     }
    // )

    alert("sucess");
})











// //delete
// $('.digest').on('click', () => {
//     // $.ajax('/api/bugers', { type: 'DELETE' }).then(
//     //     function (data) {

//     //     }
//     // )
//     alert("clicked");
//     // location.reload();
// })





// $('body').append(`
// <div>
//     <li>
//                 <div class='burgerName'>
//                     <p>eee</p>
//                     <button class='test2'>please work</button>
//                 </div>
//             </li>
// </div>`);

// $('.test2').on('click', () => {
//     alert('success');
// })

// $('#test').on('click',()=>{
//     alert('success');
// })