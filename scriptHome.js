$(document).ready(function () {

    //Check Page Ready
    console.log("Ready");
    
    var pageName = document.title;
    var pageTitle = "";

    var dataCount = 0;
    var projectTemplate = "";
    
    var winWidth = $(window).width();
    console.log(winWidth);
    //Calls JSON blocks based on the logic and page title from above.

     var jsonURL = 'workData_backUp.json';
            $.getJSON(jsonURL, function (json) {

                 //Check Page Loaded Name &  Load the correct template.
            if (pageName == "John Demerritt Books | Home") {
                console.log("Boxed Loaded");
                pageTitle = json.clients;
        
            } else if (pageName == "John Demerritt Books | Bound") {
                console.log("Bound Loaded");
                pageTitle = json.bound;

            } else {
                console.log("Error.")
            }

            dataCount = pageTitle.length
            
            var imageIndex = null;


        //Grabs the width of the browser window and determines if the desktop or mobile version of the page will load. 
        if (winWidth < 765) { 
            imageIndex = 1;
        } else {
            imageIndex = 0;
        }

        for (var i = 0; i < dataCount; i++){

            projectTemplate += '<li class="client">'+ pageTitle[i].name +'</li>';
        }

        $("#template").append(projectTemplate);
    });

    //color animation
    var outputColor =  []; 
    var colorArray = ["FF0601", "AB27E3", "3757FA", "27E3E1", "2BFC3C"];
    var i = 0; 

    
    function generateColor(max) { 
      return Math.floor(Math.random() * Math.floor(max));
    };

     
     while (i < 2) {

      var colorArrayCount = colorArray.length;
      var index = generateColor(colorArrayCount);

      console.log("i = " + i);
      console.log("Color array is [" + colorArray + "]");
      
      console.log("The number randomly generated is [" + index + "]");

      outputColor.push("#" + colorArray[index]);
      colorArray.splice(index, 1);
      console.log("Output array is [" + outputColor + "]");
      i++;
     };

     var bgColor = "";

    bgColor += "<h1>" + outputColor[0] + "</h1>";
    bgColor += "<h1>" + outputColor[1] + "</h1>";

    $("body").css("background-color", outputColor[0]);

});
    
    
    
    