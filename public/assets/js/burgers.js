
// location.reload;

// $.ajax("/api/freshburgers",{ type: "get"}).then(
//     function(data){
//         console.log(data);
//         for(let burgers of data)
//     }
// );

$.ajax("/api/freshburgers",{ type: "get"}).then(
    function(data){
        // console.log(data[0].burger_name);
        console.log(data.burgers);
        data.burgers.forEach(i => {$('#eaten').append(
            `<li>
                <p>${i.burger_name}</p>
                <button class='eat'>Eat me</button>
            </li>`
        )})
    }
);

$.ajax("/api/eatenburgers",{ type: "get"}).then(
    function(data){
        // console.log(data[0].burger_name);
        console.log(data.burgers);
        data.burgers.forEach(i => {$('#not_eaten').append(
            `<li>
                <div class='burgerName'>
                    <p>${i.burger_name}</p>
                    <button class='digest'>Digest</button>
                </div>
            </li>`
        )})
    }
);

//put
$('.eat').on('click',()=>{
    $.ajax('/api/bugers',{type: 'PUT'}).then(
        function(data){

        }
    )
})

//post 
$('.eat').on('submit',()=>{
    $.ajax('/api/bugers',{type: 'POST'}).then(
        function(data){
            
        }
    )
})

//delete
$('.digest').on('click',()=>{
    $.ajax('/api/bugers',{type: 'DELETE'}).then(
        function(data){
            
        }
    )
})