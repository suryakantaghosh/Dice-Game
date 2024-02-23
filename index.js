
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImage1 = "dice"+randomNumber1+".png";
    var randomImageSource = "./images/"+randomImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageSource);

 
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomImage2 = "dice"+randomNumber2+".png";
    var randomImageSource2 = "./images/"+randomImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageSource2);


    if(randomNumber1>randomNumber2)
    {
        //console.log("Player1 Wins");
        document.querySelector("h1").innerHTML="🚩Player1 Wins";
    }
    else if(randomNumber2>randomNumber1)
    {
        //console.log("Player2 Wins");
        document.querySelector("h1").innerHTML="Player2 Wins🚩";
    }
    else
    {
        //console.log("draw");
        document.querySelector("h1").innerHTML="🚩draw🚩";
    }
