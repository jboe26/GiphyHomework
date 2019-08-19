$( document ).ready(function() {
    console.log( "ready!" );


      $("button").on("click", function () {
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          person + "&api_key=4IHnhsR2X6fuvZRUQbM3yYfwqzBCh4RV&limit=30";

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
            
             gifDiv.prepend(personImage);
  
              $("#gifs-appear-here").prepend(personImage);
            }
          });
      });
    
    });