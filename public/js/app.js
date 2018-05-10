<<<<<<< HEAD
$(document).ready(function () {
    
    $('#btn1').on('click', function () {
=======
// var user_model =require('./models/user_model.js');

$(document).ready(function () {
    M.AutoInit();
    $('.dropdown-trigger').dropdown();
    $('.scrollspy').scrollSpy({
        scrollOffset: 100,
      });
    $('#userBtn').on('click', function () {
>>>>>>> 7973b37e73370b8399eb6f87760c29ad3408e15f

        var user = $("#name").val();

        var email = $("#email").val();
<<<<<<< HEAD
        
        var user_input = $('#calorieInput').val()

        var calories = Math.floor(user_input / 3)

=======

        var user_input = $('#calorieInput').val()

        var breakfast = "N/A"
        var lunch = "N/A"
        var dinner = "N/A"

        var calories = user_input
>>>>>>> 7973b37e73370b8399eb6f87760c29ad3408e15f

        console.log(user)
        console.log(email)
        console.log(user_input)
        console.log(calories)
<<<<<<< HEAD
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

=======
        //  ======================= USER LOGIC =========================== //


        $.ajax({
            url: '/api/user',
            method: "POST",
            data: {
                user: user,
                email: email,
                calories: calories,
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner,
                createdAt: {
                    type: 'TIMESTAMP',
                    allowNull: false
                  },
                  updatedAt: {
                    type: 'TIMESTAMP',
                    allowNull: false
                  }
                } 
                }).then(function () {
            // console.log(response)
            //         var hits = JSON.parse(response.hits);



            //         var recipe1 = Math.floor(Math.random() * 10);
            //         var recipe2 = Math.floor(Math.random() * 10);

            //         if (recipe1 === recipe2) {
            //             var recipe2 = Math.floor(Math.random() * 10)

            //         }

            //         console.log(recipe1)
            //         console.log(recipe2)

            //         console.log(hits)

        })


        //  ======================= API and AJAX Calls =========================== //
        $('#btn1').on('click', function () {
            console.log('hello')
            var user_input = $('#calorieInput').val()
            console.log(user_input)
            $.ajax({
                url: '/api/edamam',
                method: "POST",
                data: {
                    calories: user_input
                }
            })
                .then(function (response) {
                    console.log(response)
                    var hits = response.hits;



                    var recipe1 = Math.floor(Math.random() * 10);
                    var recipe2 = Math.floor(Math.random() * 10);

                    if (recipe1 === recipe2) {
                        var recipe2 = Math.floor(Math.random() * 10)

                    }

                    console.log(recipe1)
                    console.log(recipe2)

                    console.log(hits)

                    // var meal = hits[recipe1].recipe
                    // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
                    // $("#here1").append(meal_img)
                    // console.log(meal.image)
                    var card1 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ hits[recipe1].recipe.label + `</h3>
                                  <img src="` + hits[recipe1].recipe.image + `">
                                  <a href="`+ hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                                  <p>Calories: <span id="caloriesNumber">`+ hits[recipe1].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ hits[recipe1].recipe.ingredientLines + `</div>
                              </div>
                          </div>
                          `
                  
                        var card2 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ hits[recipe2].recipe.label + `</h3>
                                  <img src="` + hits[recipe2].recipe.image + `">
                                  <a href="`+ hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories: <span id="caloriesNumber">`+ hits[recipe2].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ hits[recipe2].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                        $('#meal_1').html(card1)
                        $('#meal_2').append(card2)
                })
        })
    })
})

// $("#btn1").on("click", function () {
//     // var total_calories =  userInput.val()
//     var calories = $('#calorieInput').val()
//     console.log(calories)

    
//     // var meals = {ajax_call }

//     var queryURL = "https://api.edamam.com/search?q=&app_id=b70eca75&app_key=511c6bd4799b355c07c028fcdf6d7fea&calories="+calories

//     $.ajax({
//       url: queryURL,
//       method: "GET",

//     }).then(function (response) {
//       console.log(response)

//       var hits = response.hits;


//       var recipe1 = Math.floor(Math.random() * 10);
//       var recipe2 = Math.floor(Math.random() * 10);

//       if (recipe1 === recipe2) {
//         var recipe2 = Math.floor(Math.random() * 10)

//       }

//       console.log(recipe1)
//       console.log(recipe2)


//       // var meal = hits[recipe1].recipe
//       // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
//       // $("#here1").append(meal_img)
//       // console.log(meal.image)

//       var card1 = `
//   <div class="col s4" id="resultsDiv">
//             <div class="row" id="recipeDiv">
//                 <h3 id="recipeName">`+ hits[recipe1].recipe.label + `</h3>
//                 <img src="` + hits[recipe1].recipe.image + `">
//                 <a href="`+ hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
//                 <p>Calories: <span id="caloriesNumber">`+ hits[recipe1].recipe.calories + `</span></p>
//                 <div id="ingredients">`+ hits[recipe1].recipe.ingredientLines + `</div>
//             </div>
//         </div>
//         `

//       var card2 = `
//   <div class="col s4" id="resultsDiv">
//             <div class="row" id="recipeDiv">
//                 <h3 id="recipeName">`+ hits[recipe2].recipe.label + `</h3>
//                 <img src="` + hits[recipe2].recipe.image + `">
//                 <a href="`+ hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
//                 <p>Calories: <span id="caloriesNumber">`+ hits[recipe2].recipe.calories + `</span></p>
//                 <div id="ingredients">`+ hits[recipe2].recipe.ingredientLines + `</div>
//             </div>
//         </div>`
//       $('#here1').html(card1)
//       $('#here1').append(card2)

//     })







    //     for(var i = 0; i < 2;i++){



    //         // var num = Math.floor(Math.random()*10)
    //         // console.log(typeof(num))
    //         // // $("").html(response.hit[num])
    //         // console.log(response);}
    //    } 

//   })
    // event.preventDefault()

    // $('.sidenav').sidenav();
    // $('.modal').modal();

    // $('select').material_select();
>>>>>>> 7973b37e73370b8399eb6f87760c29ad3408e15f
