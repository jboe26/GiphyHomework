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
            var results = response.data;
  
            
            
            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");

  
              var personImage = $("<img>");
              personImage.attr("src", results[i].images.fixed_height.url);
                console.log(personImage);
             gifDiv.empty();
             gifDiv.prepend(personImage);
  
              $("#gifs-appear-here").prepend(personImage);

              $("#rating").text("Rating: " + response.data[0].rating);
              

            }
          });
      });
    

    $("#submit").on('click', function(event) {
     
        event.preventDefault();
        var newQuery = $('#text').val()
        console.log(newQuery);

        
        
    

         
      

      })
      
      
      
      populateButtons();

    });