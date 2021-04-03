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

    var john = "";

    john += '<a href="index.html" aria-label="Navigate back to home">';
    john += '<svg id="header" viewBox="0 0 1054.4 206.8";';
    john += '<style type="text/css"></style>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M3,13.4h64.3c73.4,0,93.8,47.5,93.8,90c0,42.5-19.9,90.7-93.8,90.7H3V13.4z M37.5,42.9v121.7h34.1c29.5,0,55-10.3,55-61.2c0-50.6-25.4-60.5-55-60.5H37.5z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M204.3,134.4C205,161,216.8,173,234.1,173c14.6,0,23-6.5,26.6-19.9h31.9c-6.5,27.4-25.4,43.9-60.7,43.9c-41,0-60-30.2-60-65.5c0-35.3,21.1-65.5,61.4-65.5s61.4,29.5,61.4,68.4H204.3z M206,113.5h55.4C258.1,96,249.2,89,233.6,89C219.9,89,209.8,95.5,206,113.5z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M344,194.1h-33.1V68.9H344v18c2.9-5.8,15.1-20.9,38.4-20.9c20.4,0,31.9,9.4,38.2,23.8c4.3-7,12.2-23.8,41.5-23.8c38.6,0,47.3,28.8,47.3,62.4v65.8h-33.1v-67.9c0-19.2-4.1-32.9-21.8-32.9c-14.9,0-27.6,7.7-27.6,37.4v63.4h-33.1v-67.9c0-19.2-4.3-32.9-22.1-32.9c-12.7,0-27.6,8.2-27.6,34.6V194.1z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M557.1,134.4c0.7,26.6,12.5,38.6,29.8,38.6c14.6,0,23-6.5,26.6-19.9h31.9C639,180.5,620,197,584.7,197c-41,0-60-30.2-60-65.5c0-35.3,21.1-65.5,61.4-65.5c40.3,0,61.4,29.5,61.4,68.4H557.1z M558.8,113.5h55.4C610.9,96,602,89,586.4,89C572.7,89,562.7,95.5,558.8,113.5z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'"d="M696.8,194.1h-33.1V68.9h33.1v24.7C699,85.7,714.1,66,741.9,66v33.1c-23-1.4-45.1,9.6-45.1,36.7V194.1z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M785.1,194.1H752V68.9h33.1v24.7c2.2-7.9,17.3-27.6,45.1-27.6v33.1c-23-1.4-45.1,9.6-45.1,36.7V194.1z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M844.8,9.8h34.6v34.6h-34.6V9.8z M845.5,68.9h33.1v125.3h-33.1V68.9z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M912.5,93.3h-18V68.9h18V29.3h33.1v39.6h22.3v24.5h-22.3v65.3c0,7.4,3.4,10.8,12.2,10.8c7.4,0,12.2-0.7,12.2-0.7v27.1c0,0-7.9,1.2-22.1,1.2c-33.6,0-35.5-23-35.5-32.9V93.3z"/></g>';
    john += '<g><path style="fill:' + outputColor[1] +'" d="M993.8,93.3h-18V68.9h18V29.3h33.1v39.6h22.3v24.5h-22.3v65.3c0,7.4,3.4,10.8,12.2,10.8c7.4,0,12.2-0.7,12.2-0.7v27.1c0,0-7.9,1.2-22.1,1.2c-33.6,0-35.5-23-35.5-32.9V93.3z"/>';
    john += '</g>';
    john += '</svg></a>';

  
     var ampersand = "";

     ampersand += '<svg viewBox="0 0 727 733.9">';
     ampersand += '<path style="fill:' + outputColor[1] +'" d="M14.9,491.8c-1.3-96.5,70.1-164,146.8-188.4c-33.1-27.8-41-78.7-41-107.1c0-82,70.8-185.1,199-184.5c80.6,0.6,136.8,60.8,136.8,126.3c0,58.8-41.6,95.2-74.7,109.1l-29.8,12.6l76.7,54.9c17.8-87.3,68.7-181.8,163.3-180.5c62.1,0.6,124.3,46.9,122.9,122.3c-1.3,69.4-43,104.5-95.2,104.5c-43,0-78-40.3-78-82.7c0-74.7,63.5-74.7,63.5-103.8c0-12.6-12.6-18.5-27.8-18.5c-64.1,0-111.1,91.9-129.6,172.6l17.8,12.6c87.9,64.1,112.4,107.7,112.4,185.1c0,98.5-91.2,185.1-207.6,185.1c-9.3,0-27.1-1.3-37-3.3v-8.6h3.3c83.3,0,122.3-79.3,123.6-121c1.3-46.9-21.8-66.8-52.9-91.9c-12.6,79.3-70.8,182.5-200.3,181.8C98.2,667.7,15.6,589.7,14.9,491.8z M124,436.9c3.3,58.8,52.9,132.2,146.8,132.2c51.6,0,91.2-31.7,125.6-91.9L171,310.7C141.9,343.7,120.7,374.8,124,436.9z M234.4,136.1c-2.6,52.2,44.9,105.8,101.8,112.4C366,226.1,399,191,400.4,136.8c1.3-60.2-34.4-91.2-76.7-93.2C260.9,40.3,237.1,91.2,234.4,136.1z"/>';
     ampersand += '</svg>';
     

     $("body").css("background-color", outputColor[0]);
     $("#header").append(john);
     $(".amp").append(ampersand);

});
    
    
    
    