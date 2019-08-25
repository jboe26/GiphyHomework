$( document ).ready(function() {
  console.log( "ready!" );

  var topics = ["United States", "Canada", "Mexico", "France", "Ireland"];

  function populateButtons() {
    $("#buttons").empty();

    for (i=0; i < topics.length; i++) {
      var newGif = $('<button>').text(topics[i]);
      newGif.attr("data-person", topics[i]);
      $("#buttons").append(newGif);
    }

  }

    $("#buttons", ).on("click", "button", function () {
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=4IHnhsR2X6fuvZRUQbM3yYfwqzBCh4RV&limit=30";

        console.log(this);
        console.log(queryURL);

        

      

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
          var state = $(this).attr("data-state");
          var results = response.data;

          $(".gif").on("click", function() {
            
            state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
          
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            console.log(i);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height_still.url);
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-animate", results[i].images.original.url);
            personImage.attr("current-state", "still");
            personImage.addClass("gif");
            
      
          
          console.log(personImage);
          
           gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(personImage);
            

            
            //  var rating = $("<p>").append(gifDiv);
            // gifDiv.append(rating);
            
            //  $("<p>").text("Rating: " + response.data[0].rating);

          }

    

        });

      
    });
  
    

  $("#submit").on('click', function(event) {
   
      event.preventDefault();
      var newQuery = $('#text').val().trim();
      var newCountry = $("<button>").html(newQuery);


      topics.push(newQuery);
      newCountry.append("#buttons");
      console.log(newCountry);        

       populateButtons();

    })
    
    
    
    populateButtons();

  });