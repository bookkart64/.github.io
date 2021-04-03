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
            if (pageName == "John Demerritt Books | Boxed") {
                console.log("Boxed Loaded");
                pageTitle = json.boxed;
        
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

            projectTemplate += '<section class="projectTemplate">';
            projectTemplate += '<img class="projectImage" src="images/' + pageTitle[i].image1[imageIndex] + '" alt= "'+ pageTitle[i].image1[2] +'"/>';
            projectTemplate += '<img class="projectImage" src="images/' + pageTitle[i].image2[imageIndex] + '" alt= "'+ pageTitle[i].image2[2] +'"/>';
            projectTemplate += '<p class="projectText"><b>'+ pageTitle[i].title + "</b> - " + pageTitle[i].artist + ". " + pageTitle[i].media + pageTitle[i].copy + '</p>';
            projectTemplate += '</section>'
        }

        $("#template").append(projectTemplate);
    });
});

    
    
    
    
    