$(document).ready(function () {
    
    $('#btn1').on('click', function () {

        var user = $("#name").val();

        var email = $("#email").val();
        
        var user_input = $('#calorieInput').val()

        var calories = Math.floor(user_input / 3)


        console.log(user)
        console.log(email)
        console.log(user_input)
        console.log(calories)
    //  ======================= USER LOGIC =========================== //
        

        // $.ajax({
        //     url: '/api/user',
        //     method: "POST",
        //     data: {
        //         user: user,
        //         email: email,
        //         calories: user_input
        //     }
        // }).then(function(){
            
        // })


    //  ======================= API and AJAX Calls =========================== //
        
    
        
        


        $.ajax({
            url: '/api/edamam',
            method: "POST",
            data: {
                calories: calories
            }
        })
            .then(function (response) {
                console.log("ajax")
                console.log(JSON.parse(response))
                var res = JSON.parse(response)
//                 var hits = JSON.parse(response.hits);


                var recipe1 = Math.floor(Math.random() * 10);
                var recipe2 = Math.floor(Math.random() * 10);
                var recipe3 = Math.floor(Math.random() * 10);

                console.log(res.hits[recipe1])

                if (recipe1 === recipe2) {
                    var recipe2 = Math.floor(Math.random() * 10)

                }
                if (recipe2 === recipe3) {
                    var recipe2 = Math.floor(Math.random() * 10)

                }
                if (recipe3 === recipe1) {
                    var recipe2 = Math.floor(Math.random() * 10)

                }

//                 // console.log(recipe1)
//                 // console.log(recipe2)


//                 // var meal = hits[recipe1].recipe
//                 // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
//                 // $("#here1").append(meal_img)
//                 // console.log(meal.image)
//                 console.log(hits)
                var card1 = `
                <div class="col s4" id="resultsDiv">
                <div class="row" id="recipeDiv">
                <h3 id="recipeName">` + res.hits[recipe1].recipe.label + `</h3>
                <img src="` + res.hits[recipe1].recipe.image + `">
                <a href="` + res.hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                <p>Calories: <span id="caloriesNumber">` + res.hits[recipe1].recipe.calories + `</span></p>
                <div id="ingredients">` + hits[recipe1].recipe.ingredientLines + `</div>
                </div>
                </div>
//         `

//                 var card2 = `
//   <div class="col s4" id="resultsDiv">
//             <div class="row" id="recipeDiv">
//                 <h3 id="recipeName">` + hits[recipe2].recipe.label + `</h3>
//                 <img src="` + hits[recipe2].recipe.image + `">
//                 <a href="` + hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
//                 <p>Calories: <span id="caloriesNumber">` + hits[recipe2].recipe.calories + `</span></p>
//                 <div id="ingredients">` + hits[recipe2].recipe.ingredientLines + `</div>
//             </div>
//         </div>`
//                 $('#resultsDiv').html(card1)
//                 $('#resultsDiv').append(card2)

            })
    })
})

